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
            <div className="flex">
                <div className="bg-white">Favorite</div>
                <div>list od program</div>
            </div>
        </div>
      </div>
    </>
  );
};
