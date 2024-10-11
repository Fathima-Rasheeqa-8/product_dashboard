import Nav from "./Nav";

export default function Layout({ children }) {
  return (
    <div className='min-h-screen flex relative'>
      <div className='bg-blue-900 w-1/4 min-h-screen z-10'>
        <Nav />
      </div>
      <div className='bg-white flex-grow mt-0 ml-[-50px] mb-2 rounded-lg p-2 z-20' style={{ position: 'relative', marginLeft: '-50px' }}>
        {children}
      </div>
    </div>
  );
}
