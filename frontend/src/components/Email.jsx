import React from "react";
import { MdCropSquare } from "react-icons/md";
import { MdOutlineStarBorder } from "react-icons/md";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setSelectedEmail } from "../redux/appSlice";
import { formatDistanceToNow } from "date-fns";

const Email = ({ email }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const openMail = () => {
    dispatch(setSelectedEmail(email));

    navigate(`/mail/${email._id}`);
  };
  return (
    <div
      onClick={openMail}
      className="flex items-center justify-between border-b border-gray-200 px-4 py-3 text-sm hover:cursor-pointer hover:shadow-md"
    >
      <div className="flex items-center gap-3">
        <div className="text-gray-400">
          <MdCropSquare size={"20px"} />
        </div>
        <div className="text-gray-400">
          <MdOutlineStarBorder size={"20px"} />
        </div>
        <div>
          <h1 className="font-semibold">{email?.subject}</h1>
        </div>
      </div>
      <div className="flex-1 ml-4">
        <p>{email?.message}</p>
      </div>
      <div className="flex-none text-gray text-sm">
        {/* Use formatDistanceToNow to display relative time */}
        <p>
          {formatDistanceToNow(new Date(email?.createdAt), { addSuffix: true })}
        </p>
      </div>
    </div>
  );
};

export default Email;

// import React from "react";
// import { MdCropSquare } from "react-icons/md";
// import { MdOutlineStarBorder } from "react-icons/md";
// import { useDispatch } from "react-redux";
// import { useNavigate } from "react-router-dom";
// import { setSelectedEmail } from "../redux/appSlice";
// import { format, isToday } from "date-fns"; // Import these from date-fns

// const Email = ({ email }) => {
//   const navigate = useNavigate();
//   const dispatch = useDispatch();

//   const openMail = () => {
//     dispatch(setSelectedEmail(email));
//     navigate(`/mail/${email._id}`);
//   };

//   // Format the date and time based on whether it's today or not
//   const formattedDate = isToday(new Date(email?.createdAt))
//     ? format(new Date(email?.createdAt), "HH:mm") // For today's emails, show time as HH:mm
//     : format(new Date(email?.createdAt), "dd/MM/yyyy"); // For older emails, show date as dd/MM/yyyy

//   return (
//     <div
//       onClick={openMail}
//       className="flex items-center justify-between border-b border-gray-200 px-4 py-3 text-sm hover:cursor-pointer hover:shadow-md"
//     >
//       <div className="flex items-center gap-3">
//         <div className="text-gray-400">
//           <MdCropSquare size={"20px"} />
//         </div>
//         <div className="text-gray-400">
//           <MdOutlineStarBorder size={"20px"} />
//         </div>
//         <div>
//           <h1 className="font-semibold">{email?.subject}</h1>
//         </div>
//       </div>
//       <div className="flex-1 ml-4">
//         <p>{email?.message}</p>
//       </div>
//       <div className="flex-none text-gray text-sm">
//         {/* Display formatted date or time */}
//         <p>{formattedDate}</p>
//       </div>
//     </div>
//   );
// };

// export default Email;
