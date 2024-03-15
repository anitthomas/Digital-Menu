import { Button } from "@/components/ui/button"

export default function Home() {
    return (
        <div >
            <div className="signup flex flex-col justify-center items-center h-screen w-[40%] bg-orange-500 ">

                <div className="header ml-[10vh]">
                    <h2 className=" scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl text-white">
                        Book your Orders Digitally
                    </h2>
                </div>
                <div className="signup-button w-[80%] justify-evenly mt-[10vh] flex ">
                    <Button variant="outline">Sign-in as User</Button>
                    <Button variant="outline">Sign-In as Restaurant</Button>

                </div>

            </div>
        </div>
    )
}
