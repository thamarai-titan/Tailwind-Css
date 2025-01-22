export const Page1 = () => {
  return (
    <>
      <div className="flex h-screen">
        <div className="bg-slate-400 w-96 max-h-full ">
          <div className="flex justify-between p-8">
            <div>My Lists</div>
            <div>click</div>
          </div>
          <h2 className="px-8">Created By Me</h2>
          <div className="pl-6 pt-8">
            <div className="w-64 bg-slate-100 p-3 flex justify-between rounded-lg">
              <span>Favorite</span>
              <span>lock</span>
            </div>
          </div>
        </div>
        <div className="bg-sky-400 w-full">
          <div className="flex gap-10 p-10 ">
            <div className="bg-white w-80 h-120 p-6">
              <p className="bg-indigo-300 w-20 h-20 text-center content-center">
                Start
              </p>
              <h2 className="text-3xl py-3">Favorite</h2>
              <div className="text-black flex items-center gap-1">
                <span>Sumana</span>
                <span>·</span>
                <span>19 questions</span>
                <span>·</span>
                <span>🔒 Private</span>
              </div>

              <div className="">
                <button className="bg-gray-400 mr-5 w-28 h-8 rounded-2xl my-5">Practice</button>
                <button className="bg-gray-400 w-12 h-8 rounded-2xl">Link</button>
                <hr className="border-gray-400" />
                <p className="mt-3">Progress</p>
                <div>
                  <div>Progress</div>
                  <div>
                    <div>Easy</div>
                    <div>Med.</div>
                    <div>Hard</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-white w-120 h-120">list od program</div>
          </div>
        </div>
      </div>
    </>
  );
};
