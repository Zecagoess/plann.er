import { Mail, Plus, User, X } from "lucide-react";
import { FormEvent } from "react";

interface ConfirmTripModalProps {
    closeConfirmTripModal: () => void;
    createTrip: (event: FormEvent<HTMLFormElement>) => void;
    setOwnerName: (name: string) => void;
    setOwnerEmail: (email: string) => void;

}



export function ConfirmTripModal({
    closeConfirmTripModal,
    createTrip,
    setOwnerName,
    setOwnerEmail
}: ConfirmTripModalProps) {
    return (
        <div className="fixed inset-0 bg-black/60 flex items-center justify-center">
            <div className='w-[640px] rounded-xl py-5 px-6 shadow-shape bg-zinc-900 space-y-5'>
                <div className='space-y-2'>
                    <div className='flex items-center justify-between'>
                        <h2 className='text-lg font-semibold'>Confirmar criação de viagem</h2>
                        <button onClick={closeConfirmTripModal}>
                            <X className='size-5 text-zinc-400' />
                        </button>
                    </div>
                    <p className='text-sm text-zinc-400 '>
                        Para concluir a criação da viagem para <span className='text-zinc-100 font-semibold'>Florianópolis</span>, Brasil nas datas de <span className='text-zinc-100 font-semibold'>16 a 27 de Agosto de 2024</span> preencha seus dados abaixo:
                    </p>
                </div>


                <form onSubmit={createTrip} className='flex flex-col gap-2'>
                    <div className='h-14 px-4 bg-zinc-950 border border-zinc-800 rounded-lg flex items-center gap-2'>
                        <User className='text-zinc-400 size-5' />
                        <input
                            name="name"
                            placeholder="Seu nome completo"
                            className="bg-transparent text-lg placeholder-zinc-400 w-40 outline-none flex-1"
                            onChange={event => setOwnerName(event.target.value)}
                        />
                    </div>

                    <div className='h-14 px-4 bg-zinc-950 border border-zinc-800 rounded-lg flex items-center gap-2'>
                        <Mail className='text-zinc-400 size-5' />
                        <input
                            type="email"
                            name="email"
                            placeholder="Seu nome email pessoal"
                            className="bg-transparent text-lg placeholder-zinc-400 w-40 outline-none flex-1"
                            onChange={event => setOwnerEmail(event.target.value)}
                        />
                    </div>
                    <button type='submit' className=' w-full justify-center bg-lime-300 text-lime-950 rounded-lg px-5 h-11 font-medium flex items-center gap-2 hover:bg-lime-400'>
                        Confirmar criação da viagem
                        <Plus className='size-5' />
                    </button>
                </form>
            </div>
        </div>
    )
}