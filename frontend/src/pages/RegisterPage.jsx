import { Button, Card, Input, Label, Container } from "../components/ui";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

function RegisterPage() {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const { signup, errors: signupErrors } = useAuth();

    const navigate = useNavigate();

    const onSubmit = handleSubmit(async (data) => {
        const user = await signup(data);

        if (user) navigate("/tasks");
    });

    return (
        <Container className=" h-[calc(100vh-10rem)] flex items-center justify-center">
            <Card>
                {signupErrors &&
                    signupErrors.map((err) => (
                        <p className=" bg-red-500 text-white p-2 text-center">
                            {err}
                        </p>
                    ))}

                <h3 className=" text-4xl font-bold my-2 text-center">
                    Register
                </h3>
                <form onSubmit={onSubmit}>
                    <Label htmlFor="name">Name</Label>
                    <Input
                        placeholder="enter name"
                        {...register("name", {
                            required: true,
                        })}
                    />
                    {errors.name && (
                        <p className=" text-red-500">Name is required</p>
                    )}

                    <Label htmlFor="email">Email</Label>
                    <Input
                        type="email"
                        placeholder="enter email"
                        {...register("email", {
                            required: true,
                        })}
                    />
                    {errors.email && (
                        <p className=" text-red-500">Email is required</p>
                    )}

                    <Label htmlFor="password">Password</Label>
                    <Input
                        type="password"
                        placeholder="enter password"
                        {...register("password", {
                            required: true,
                        })}
                    />
                    {errors.password && (
                        <p className=" text-red-500">Password is required</p>
                    )}

                    <Button>Register</Button>

                    <div className=" flex justify-between my-4">
                        <p className=" mr-2">Already have an account? </p>
                        <Link to="/login" className=" font-bold">
                            Login
                        </Link>
                    </div>
                </form>
            </Card>
        </Container>
    );
}

export default RegisterPage;
