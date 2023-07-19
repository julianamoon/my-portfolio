import { createClient } from "contentful";
import { useEffect, useState } from "react";

const client = createClient({
  space: import.meta.env.VITE_SPACE_ID,
  environment: "master",
  accessToken: import.meta.env.VITE_CONTENT_DELIVERY_API,
});

export const useFetchProject = () => {
  const [loading, setLoading] = useState(true);
  const [fetchedProjects, setFetchedProjects] = useState([]);

  const getData = async () => {
    try {
      const response = await client.getEntries({ content_type: "portfolio" });
      const fetchedProjects = response.items.map((item) => {
        const { id, title, url, code, image, description } = item.fields;
        const text = description.content[0].content[0].value
        const img = image?.fields?.file?.url;
        return { title, url, id, img, code, text };
      });
      setFetchedProjects(fetchedProjects);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      console.log("ops");
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return { loading, fetchedProjects };
};
