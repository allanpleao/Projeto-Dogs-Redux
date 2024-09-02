import { useParams } from "react-router-dom";
import { useEffect } from "react";
import Error from "../Helper/Error";
import Loading from "../Helper/Loading";
import PhotoContent from "./PhotoContent";
import Head from "../Helper/Head";
import { useDispatch, useSelector } from "react-redux";
import { fetchPhoto } from "../../redux/store/Slices/PhotoSlice";

const Photo = () => {
  const { id } = useParams();
  const { data, loading, error } = useSelector((state) => state.photo)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchPhoto(id))
  }, [dispatch, id]);
  console.log(data)
  if (error) return <Error error={error} />;
  if (loading) return <Loading />;
  if (data)
    return (
      <section className="mainContainer">
        <Head title={data.title}/>
        <PhotoContent single={true} data={data} />  
      </section>
    );
  else return null;
};

export default Photo;
