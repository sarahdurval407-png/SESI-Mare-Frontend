import { Heart, MessageCircle, Bookmark } from "lucide-react"

interface PostCardProps {
    username: string
    time: string
    content: string

    musicTitle: string
    artist: string

    likes: number
    comments: number
}

export default function PostCard({
    username,
    time,
    content,
    musicTitle,
    artist,
    likes,
    comments,
}: PostCardProps) {

    return (
        <article className="border border-[#202b3d] bg-[#111722] rounded-lg p-4">

            {/* Usuário */}
            <div className="flex items-center gap-3 mb-3">

                <div className="w-10 h-10 rounded-full bg-[#697386]" />

                <div>
                    <p className="text-[14px] text-[#d4d9e2]">
                        {username}
                    </p>

                    <p className="text-[12px] text-[#697386]">
                        há {time}
                    </p>
                </div>

            </div>


            {/* Texto */}
            <p className="text-[14px] leading-5 text-[#d1d5db] mb-4">
                {content}
            </p>


            {/* Música */}
            <div className="border border-[#354052] rounded-lg p-4 flex items-center gap-3">

                <div className="w-14 h-14 rounded-md bg-[#697386] shrink-0" />

                <div className="flex-1 min-w-0">

                    <p className="text-[14px] text-[#d7dbe2] truncate">
                        {musicTitle}
                    </p>

                    <p className="text-[12px] text-[#697386]">
                        {artist}
                    </p>

                </div>

                <div className="text-[#8791a3] text-[12px]">
                    ♫ 4.8
                </div>

            </div>


            {/* Ações */}
            <div className="flex items-center justify-between mt-3 text-[#697386]">

                <div className="flex items-center gap-4">

                    <div className="flex items-center gap-1.5">
                        <Heart size={16} />
                        <span className="text-[12px]">
                            {likes}
                        </span>
                    </div>

                    <div className="flex items-center gap-1.5">
                        <MessageCircle size={16} />
                        <span className="text-[12px]">
                            {comments}
                        </span>
                    </div>

                </div>

                <Bookmark size={16} />

            </div>

        </article>
    )
}