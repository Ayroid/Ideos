import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const AuthPage = () => {
  return (
    <div className="p-4 rounded-lg shadow-md w-96">
      <h1 className="text-2xl font-bold text-center">Login</h1>
      <form className="space-y-4">
        <Input type="email" placeholder="Email" />
        <Input type="password" placeholder="Password" />
        <Button type="submit" className="w-full">
          Login
        </Button>
      </form>
    </div>
  );
};

export default AuthPage;
