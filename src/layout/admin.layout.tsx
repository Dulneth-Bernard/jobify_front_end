import { Button } from "@/components/ui/button";
import { useUser } from "@clerk/clerk-react";
import { useEffect } from "react";
import { Link, Outlet, useNavigate } from "react-router-dom";

function AdminMainLayout() {
  const { user, isLoaded, isSignedIn } = useUser();
  const navigate = useNavigate();

  useEffect(() => {
    //chec k if user is loaded
    if (!isLoaded) {
      return;
    }

    // Check if user is sighned in 

    if (!isSignedIn) {
      return navigate("/sign-in");
    }
    // CHECK IF USER IS AN ADMIN 
    if (user?.publicMetadata?.role !== "admin") {
      // wE DONT LET THEM ACCESS the route if not admin
      return navigate("/");
    }
  }, [isLoaded, isSignedIn, navigate, user]);

  return (
    <div>
      <div className="flex justify-end gap-x-4 items-center py-4">
        <Link to="/admin/jobs">Job Posts</Link>
        <Button asChild>
          <Link to="/admin/job/create">Post A Job</Link>
        </Button>
      </div>
      <Outlet />
    </div>
  );
}

export default AdminMainLayout;
