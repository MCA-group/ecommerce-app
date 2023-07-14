function Home() {
  return (
    <div className="flex items-center flex-col">
      <img
        src="https://img.freepik.com/free-vector/promotion-fashion-banner_1188-223.jpg?w=1060&t=st=1689328589~exp=1689329189~hmac=e93faa8067f1dc8edcdb3ac1fac0aa23095162add5216412bbd2e32534b5e126"
        alt="banner"
        className="w-4/5 h-2/3 object-cover overflow-hidden max-h-[50%]"
      />
      <h2 className="uppercase text-2xl text-blue-700 font-bold my-3 py-5 border-b-4 border-blue-700">
        Categories
      </h2>
      <div className="flex justify-center md:justify-around flex-wrap">
        <section className="m-5 py-3 px-5">
          <img
            className="object-cover h-[20rem] w-[20rem]"
            src="https://images.pexels.com/photos/1183266/pexels-photo-1183266.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="men"
          />
        </section>
        <section className="m-5 py-3 px-5">
          <img
            className="object-cover h-[20rem] w-[20rem]"
            src="https://images.pexels.com/photos/952629/pexels-photo-952629.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="women"
          />
        </section>
        <section className="m-5 py-3 px-5">
          <img
            className="object-cover h-[20rem] w-[20rem]"
            src="https://images.pexels.com/photos/16976196/pexels-photo-16976196/free-photo-of-a-girl-in-a-trendy-outfit-posing-in-city.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="kids"
          />
        </section>
      </div>
    </div>
  );
}

export default Home;
