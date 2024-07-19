import { Link2, Plus } from "lucide-react";
import { useEffect, useState } from "react";
import { api } from "../../lib/axios";
import { useParams } from "react-router-dom";
import { CreateLinkModal } from "./create-link-modal";

interface Link {
    id: string;
    title: string;
    url: string;
}


export function InportantLinks() {

    const [isCreateLinkModalOpen, setIsCreateLinkModalOpen] = useState(false)

    function openCreateLinkModal() {
        setIsCreateLinkModalOpen(true)
    }

    function closeCreateLinkModal() {
        setIsCreateLinkModalOpen(false)
    }

    const { tripId } = useParams();
    const [links, setLinks] = useState<Link[]>([]);

    useEffect(() => {
        api.get(`/trips/${tripId}/links`).then(response => setLinks(response.data.links));
    }, [tripId])



    return (
        <div className="space-y-6">
            <h2 className="font-semibold text-xl">Links Importantes</h2>
            {links.map(link => {
                return (
                    <div key={link.id} className="space-y-5 flex align-center justify-between gap-4">
                        <div className="space-y-1.5 flex-1 ">
                            <span className="block font-medium text-zinc-100"> {link.title}</span>
                            <a href="#"
                                className="block text-xs text-zinc-400 truncate hover:text-zinc-300">
                                {link.url}
                            </a>
                        </div>
                        <Link2 className="text-zinc-400 size-5" />
                    </div>
                )
            })}

            <button onClick={openCreateLinkModal} className=' w-full bg-zinc-800 text-zinc-200 rounded-lg px-5 h-11 font-medium flex items-center justify-center gap-2 hover:bg-zinc-700'>
                <Plus className='size-5' />
                Cadastrar novo link
            </button>

            {isCreateLinkModalOpen && (
                <CreateLinkModal
                    closeCreateLinkModal={closeCreateLinkModal} />
            )}

        </div>
    )
}