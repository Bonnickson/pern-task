import { useAuth } from "../context/AuthContext";
import { Card } from "../components/ui";

function HomePage() {
    const data = useAuth();
    console.log(data);

    return (
        <div>
            <Card>
                <h1 className=" text-3xl font-bold my-4">Home Page</h1>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab
                    nesciunt eum magnam labore minus deleniti id dignissimos
                    assumenda fugiat repudiandae blanditiis quas nam consectetur
                    libero laborum amet temporibus nisi debitis, ea sed natus
                    quia ratione atque in. Neque, praesentium amet.
                </p>
            </Card>
        </div>
    );
}

export default HomePage;
