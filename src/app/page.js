import getData from "./lib/getUser"

export default async function Home() {
  const user = await getData()
  console.log('user-->', user);
  return (
    <main >
      <h1 className="text-center text-3xl font-bold">All Users</h1>
      {user.data.map((e, i) => {
        return (
          <div>
            <div className="bg-slate-700 text-white py-5 px-4 rounded-md mt-2  m-5">
              <h1 >{`0${i+1}`} {e.username}</h1>
              <h2  >{e.email}</h2>
            </div>
          </div>
        )
      })}
    </main>
  )
}
