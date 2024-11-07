// "use server"
// import { signIn } from "auth"
// import { Button } from "./ui/button"

// export default async function GoogleButton() {
//     let handleSignUp = async () => {
//         await signIn("google")
//     }
//     return (
//         <form
//             action={handleSignUp}
//         >
//             <Button
//                 type="submit"
//                 className="w-full flex items-center justify-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 hover:border-[#F87171] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#207DFF]"
//             >
//                 Sign up with Google
//             </Button>
//         </form>
//     )
// }

"use client"
import { signIn } from "auth"
import { Button } from "./ui/button"

// Using client-side event handling instead of form action
export default function GoogleButton() {
    const handleSignUp = async (event) => {
        event.preventDefault()
        await signIn("google")
    }

    return (
        <form onSubmit={handleSignUp}>
            <Button
                type="submit"
                className="w-full flex items-center justify-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 hover:border-[#F87171] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#207DFF]"
            >
                Sign up with Google
            </Button>
        </form>
    )
}

