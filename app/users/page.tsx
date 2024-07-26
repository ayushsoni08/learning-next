import React from 'react'

interface User {
  // this interface defines the shape of our user object
  id: number;
  name: string;
  email: string;
};

const UsersPage = async () => {

  // Next.js comes with a built-in data cache
  // Whenever we use the fetch function to get some data, next.js will automatically store the result in the data cache which is based on the file system, so the next we need the same piece of data i.e, the next time we hit the same url to get the data, next.js is not gonna go to the url, its gonna get the data from the data cache from the file system.
  // Ofcourse, we have full control over this cahcing behaviour
  // If we have that changes frequently, we can disable caching or treat data in cache as fresh for a certain period of time.
  const res = await fetch(
    "https://jsonplaceholder.typicode.com/users",
    // { cache: 'no-store' }   // to disable caching
    // { next: { revalidate: 10 } }  // to keep data fresh for a certain period of time.   This means that next.js is gonna do a background job and get fresh data from the backend every 10 seconds.
  );

  // This caching behaviour is only implemented in the fetch function.
  const users : User[] = await res.json();

  return (
    <>
      <h1>Users</h1>
      <table className='table table-zebra-zebra'>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
          {users.map(user => 
            <tr key={user.id}>
              <td>{user.name}</td>
              <td>{user.email}</td>
            </tr>
          )}
        </tbody>
      </table>
    </>
  )
}

export default UsersPage