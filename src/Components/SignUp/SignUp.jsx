import { useContext } from "react";
import { Helmet } from "react-helmet-async";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";
import Swal from "sweetalert2";


const SignUp = () => {
    // const handleRegister = event =>{
    //     event.preventDefault();
    //     const form = event.target;
    //     const name = form.name.value;
    //     const photoURL = form.photoURL.value;
    //     const email = form.email.value;
    //     const password = form.password.value;
    //     console.log(name,photoURL, email, password);
        
    // }


    const {createUser,updateUserProfile} = useContext(AuthContext);
    const navigate = useNavigate();

    // using react hook form 
    // start 
    const {
      register,
      handleSubmit,
      reset,
      formState: { errors },
    } = useForm()

    const onSubmit = (data) => {
      console.log(data);
      
      createUser(data.email, data.password,)
      .then(result =>{
        const loggedUser = result.user;
        console.log(loggedUser);

        updateUserProfile(data.name, data.photoURL)
        .then(() => {
          console.log('user profile info updated')
          reset()
          Swal.fire({
            position: "top-center",
            icon: "success",
            title: "User create successful",
            showConfirmButton: false,
            timer: 1700
          });
          navigate('/')


        })
        .catch(error => {
          console.error(error)
        })
      })
    }
    // end react hook form function 

 


    return (
      <div>
        <Helmet><title>JR Bistro | SignUp</title></Helmet>
          <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold">Register now</h1>
            <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
          </div>
          <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <form   onSubmit={handleSubmit(onSubmit)}  className="card-body">


              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input type="text" {...register("name", { required: true })} name="name" placeholder="Enter your name" className="input input-bordered"  />
                {errors.name && <span className="text-red-700">Name is required</span>}
              </div>


             <div className="form-control">
                <label className="label">
                  <span className="label-text">photoURL</span>
                </label>
                <input type="text" {...register("photoURL", { required: true })} placeholder="Enter your photoURL" className="input input-bordered"  />
                {errors.photoURL && <span className="text-red-700">photoURL is required</span>}
              </div>


              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input type="email"  {...register("email", { required: true })}  name="email" placeholder="email" className="input input-bordered"  />
                {errors.email && <span className="text-red-700">Email is required</span>}
              </div>

              
              <div className="form-control">
        <label className="label">
          <span className="label-text">Password</span>
        </label>
        <input
          type="password"
          {...register("password", {
            required: "Password is required",
            minLength: {
              value: 6,
              message: "Password must be at least 6 characters long"
            },
            maxLength: {
              value: 20,
              message: "Password cannot exceed 20 characters"
            },
            validate: {
              hasLowerAndUpper: value =>
                /[a-z]/.test(value) && /[A-Z]/.test(value) || "Password must contain at least one lowercase and one uppercase letter",
              hasSpecialChar: value =>
                /[!*"'?,.`~[{()}{}{^%$#@!~()_+]/.test(value) || "Password must contain at least one special character",
              hasDigit: value =>
                /[0-9]/.test(value) || "Password must contain at least one digit"
            }
          })}
          name="password"
          placeholder="password"
          className="input input-bordered"
        />
        {errors.password && (
          <span className="text-red-700">{errors.password.message}</span>
        )}
        <label className="label">
          <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
        </label>
      </div>


              <div className="form-control mt-6">
                <input type="submit" value='Register' className="btn btn-primary" />
              </div>
            </form>
            <p  className='pl-8 pb-5  '>Already have an account please <Link to='/login' className="hover:underline text-blue-600 ">login</Link> </p>
          </div>
        </div>
      </div>
      </div>
    );
};

export default SignUp;