type Props = {
    headerName: string;
    userName: string | undefined;
}
export default function DashboardHeader(
    {
        headerName,
        userName
    }:Props
) {
    return (
            <header className="bg-white shadow">
                <div className="max-w-7xl mx-auto py-4 px-4 sm:px-6 lg:px-8 flex justify-between items-center">
                <h1 className="text-2xl font-bold text-gray-900">{ headerName}</h1>
                  <div className="flex items-center space-x-4">
                    <span className="text-gray-600">{ userName }</span>
                    <button className="p-1 rounded-full bg-gray-200 text-gray-600 hover:bg-gray-300">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </button>
                  </div>
                </div>
              </header>
    )
}