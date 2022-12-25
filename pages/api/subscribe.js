//This function was built following this guide: https://ihatetomatoes-nextjs-101.vercel.app/post/react-query-mutation

export default async (req, res) => {
  const { first_name, email, tags } = req.query;

  if (!email) {
    return res.status(400).json({ error: "Email is required" });
  }

  try {
    const API_KEY = process.env.CONVERTKIT_API_KEY;
    const API_URL = "https://api.convertkit.com/v3";
    const FORM_ID = "2528919";

    const data = { first_name, email, api_key: API_KEY, tags: [tags] };

    const response = await fetch(`${API_URL}/forms/${FORM_ID}/subscribe`, {
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
      },
      method: "POST",
    });

    // Any error from CK return custom message
    if (response.status >= 400) {
      return res.status(400).json({
        error: `There was an error subscribing to the list.`,
      });
    }

    return res.status(201).json({ error: "" });
  } catch (error) {
    return res.status(500).json({ error: error.message || error.toString() });
  }
};
