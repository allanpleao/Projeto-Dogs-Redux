import { Route, Routes } from "react-router-dom"
import UserHeader from "./UserHeader"
import Feed from "../Feed/Feed"
import UserPhotoPost from "./UserPhotoPost"
import UserStats from '../User/UserStats'
import NotFound from "../NotFound"
import Head from "../Helper/Head"
import { useSelector } from "react-redux"

const User = () => {
  const { data } = useSelector((state) => state.user)
  return (
    <section className="container">
      <Head title="Minha conta" />
        <UserHeader />
        <Routes>
            <Route path="/" element={<Feed user={data.id} />}/>
            <Route path="post" element={<UserPhotoPost />}/>
            <Route path="stats" element={<UserStats />}/>
            <Route path="*" element={<NotFound />} />
        </Routes>
    </section>
  )
}

export default User