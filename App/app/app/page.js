import { getServerSession } from "next-auth";
import {authOptions} from "./api/auth/[...nextauth]/route";
export default async function Home() {
  const session = await getServerSession(authOptions);
  return (
    <>
    <h1>Hello world</h1>
    <h1>{JSON.stringify(session)}</h1>
    </>
  )
}
