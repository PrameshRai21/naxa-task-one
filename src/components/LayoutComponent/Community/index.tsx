function Community() {
  return (
    <div className="flex h-auto min-h-[400px] w-full flex-col items-center justify-center gap-y-5 bg-orange font-poppins">
      <h1 className="text-center text-4xl font-black leading-10 tracking-wider text-white">
        JOIN SHOPPING COMMUNITY TO <br /> GET MONTHLY PROMO
      </h1>
      <p className="text-xl font-normal leading-8 tracking-wide text-white ">
        Type your email down below and be young wild generation
      </p>
      <div className="  rounded-md bg-white p-2">
        <input
          className="min-w-64 px-3 py-1 text-lg font-normal leading-5 tracking-wide text-dark outline-none "
          type="text"
          placeholder="Add your email here"
        />
        <button className="rounded-md bg-black px-5 py-1 text-lg uppercase text-white transition-all duration-150 ease-linear hover:scale-105 focus-visible:scale-105">
          Send
        </button>
      </div>
    </div>
  );
}

export default Community;
