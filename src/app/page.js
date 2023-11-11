import getData from "./lib/getUser"

export default async function Home() {
 const user= await getData()
 console.log(user);
  return (
    <main > 

    </main>
  )
}
