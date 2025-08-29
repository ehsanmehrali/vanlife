import React from "react";
import { useParams } from "react-router-dom";

export default function HostVanDetail() {
  const [van, setVan] = React.useState(null);
  const params = useParams();

  React.useEffect(() => {
    fetch(`/api/host/vans/${params.id}`)
      .then((res) => res.json())
      .then((data) => setVan(data.vans));
  }, [params.id]);

  return <h1>HostVanDetail page goes in here!</h1>;
}
