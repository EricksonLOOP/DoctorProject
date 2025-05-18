type Props = {
    setAbaAtiva: (aba: string) => void;
    abaAtiva: string;
    options: {
        name: string;
        value: string;
    }[]
}
export default function Nav(
    {
        setAbaAtiva,
        abaAtiva,
        options
    }:Props
) {

    return (
        <div className="border-b border-gray-200">
        <nav className="-mb-px flex space-x-8 flex-wrap items-center justify-center">
                {options.map(op => (
                      <button
                      onClick={() => setAbaAtiva(op.value)}
                      className={`whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm ${
                        abaAtiva === op.value
                          ? 'border-indigo-500 text-indigo-600'
                          : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                      }`}
                    >
                      {op.name}
                    </button>
                ))}
    
        </nav>
      </div>
    )
}