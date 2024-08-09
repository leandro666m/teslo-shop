import { auth } from "@/auth.config";
import { Title } from "@/components";
import { redirect } from "next/navigation";




export default async function NamePage() {

    const session = await auth();

    if ( !session?.user) {
        // redirect("/auth/logint?returnTo=/perfil");
        redirect("/");
    }




    return (
        <div>
            <Title title="Perfil" />

            <pre>
                {
                    JSON.stringify(session.user, null, 2)
                }

                <h3 className="text-3xl mb-10"> { session.user.role } </h3>
            </pre>

        </div>
    );
}