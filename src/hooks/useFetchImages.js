import { useCallback, useEffect, useState } from "react";

export const useFetchImages = () => {
  const [images, setImages] = useState([]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(true);
  const [fondo, setFondo] = useState(true);
  const [color, setColor] = useState("blanco");

  const peticion = useCallback(async () => {
    const key = "client_id=vwL9AtGcvwfhrI96O7kq6sK49n6DqxgwGrviH5TAhQw";

    let route = `https://api.unsplash.com/photos/?${key}`;

    if (input !== "") {
      route = `https://api.unsplash.com/search/photos/?query=${encodeURI(
        input
      )}&${key}`;
    }

    setLoading(true);

    const res = await fetch(route);

    const data = await res.json();

    if (data.results) {
      setImages(data.results);
    } else {
      setImages(data);
    }

    setLoading(false);
  }, [input]);

  useEffect(() => {
    peticion();
  }, [peticion]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const text = e.target[0].value;
    setInput(text);
    e.target.reset();
  };

  const escrito = (e) => {
    const text = e.target.value;
    setInput(text);
  };

  const handleFondo = () => {
    if (fondo) {
      setColor("negro");

      setFondo(false);
    } else {
      setColor("blanco");

      setFondo(true);
    }
  };

  return [images, loading, handleSubmit, escrito, handleFondo, color, fondo];
};
