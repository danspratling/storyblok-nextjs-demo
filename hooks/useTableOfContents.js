import { useState, useEffect, useCallback } from "react";
import { generateTableOfContents } from "../utils/generateTableOfContents";

export const useTableOfContents = ({ content }) => {
  const tableOfContents = generateTableOfContents(content.content);

  const [currentSection, setCurrentSection] = useState(tableOfContents[0]?.id);

  const getHeadings = useCallback((tableOfContents) => {
    return tableOfContents.map(({ id }) => {
      const el = document.getElementById(id);
      if (!el) return;

      const top = window.scrollY + el.getBoundingClientRect().top - 60;
      return { id, top };
    });
  }, []);

  useEffect(() => {
    if (tableOfContents.length === 0) return;
    const headings = getHeadings(tableOfContents);

    function onScroll() {
      let top = window.scrollY;
      let current = headings[0].id;
      for (const heading of headings) {
        if (top >= heading.top) {
          current = heading.id;
        } else {
          break;
        }
      }
      setCurrentSection(current);
    }
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => {
      window.removeEventListener("scroll", onScroll, { passive: true });
    };
  }, [getHeadings, tableOfContents]);

  return currentSection;
};
