import { useEffect, useState } from "react"
import Alert, { AlertProps } from "../../alert_modal"
import { useAutoHideInfo } from "@/app/hooks/useAutoHideInfo"
import axios from "axios"
import { HistoryDto } from "@/app/types/History"
import HistoryCard from "../cards/history_card"

type Props = {
   activeTab: string 
}

export default function HistoryTab({ activeTab }: Props) {
    const [info, setInfo] = useState<AlertProps>()
    const [history, setHistory] = useState<HistoryDto[]>([])
    const [isLoading, setIsLoading] = useState(true)
    
    useAutoHideInfo(info, () => setInfo(undefined), 3000)

    const fetchHistory = async () => {
        try {
            setIsLoading(true)
            const res = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/history`, {
                headers: {
                    Authorization: `Bearer ${sessionStorage.getItem('token')}`
                }
            })
            if (res.status == 200) {
                setHistory(res.data)
            }
        } catch (e) {
           setInfo({
               type: 'error', 
               message: "Erro ao recuperar o seu histórico. Por favor, tente novamente mais tarde!"
           }) 
        } finally {
            setIsLoading(false)
        }
    }

    useEffect(() => {
        if (activeTab === 'meu-historico') {
            fetchHistory()
        }
    }, [activeTab])

    return (
        <div className={`w-full p-4 ${activeTab !== 'meu-historico' && 'hidden'}`}>
            {info && (
                <Alert type={info.type} message={info.message} />
            )}
            
            <h2 className="text-2xl font-bold text-gray-800 mb-6">Meu Histórico</h2>
            
            {isLoading ? (
                <div className="flex justify-center items-center h-64">
                    <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
                </div>
            ) : history.length > 0 ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {history.map(item => (
                        <HistoryCard key={item.history.id} history={item} />
                    ))}
                </div>
            ) : (
                <NoHistoryScreen />
            )}
        </div>
    )
}

function NoHistoryScreen() {
    return (
        <div className="flex flex-col items-center justify-center py-12 bg-gray-50 rounded-lg">
            <div className="mb-4 text-gray-400">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                </svg>
            </div>
            <h3 className="text-lg font-medium text-gray-700 mb-2">Nenhum histórico encontrado</h3>
            <p className="text-gray-500 text-center max-w-md">
                Você ainda não possui consultas registradas em seu histórico.
            </p>
        </div>
    )
}