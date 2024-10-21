import { collection, doc, getDocs } from "firebase/firestore";
import React, { useContext, useEffect, useState } from "react";
import { db } from "../utils/firbase";
import { context } from "../context/AuthContext";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Button } from "@mui/material";
import { MoonLoader } from "react-spinners";
import { toast } from "react-toastify";
function Users() {
  let [allUsers, setAllUsers] = useState([]);
  let [loading, setLoading] = useState(true);
  let {user,setUser} = useContext(context);
  let getAllUsers = async () => {
    try {
      setLoading(true);
      let docRef = collection(db, "users");
      let getData = await getDocs(docRef);
      let data = getData.docs.map((result) => ({
        id: result.id,
        ...result.data(),
      }));
      setAllUsers(data);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      toast.error(error.message);
    }
  };
  useEffect(() => {
    getAllUsers();
  }, []);
  console.log(user);
  return loading ? (
    <div className="w-full flex py-5 justify-center items-center">
      <MoonLoader />
    </div>
  ) : (
    <div className=" flex mx-2">
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 100, marginRight: 1 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell style={{ fontWeight: "bold" }}>Name</TableCell>
              <TableCell align="left">Email</TableCell>
              <TableCell align="left">PhoneNumber</TableCell>
              <TableCell align="left">Status</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {allUsers?.map((row) => (
              <TableRow
                key={row?.id}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {row?.name}
                </TableCell>
                <TableCell component="th" scope="row">
                  {row?.email}
                </TableCell>
                <TableCell component="th" scope="row">
                  {row?.phoneNumber}
                </TableCell>
                <TableCell align="left">
                  {
                    // console.log(user.isActive == true ? "active" : "panding")
                    //   console.log(user)
                  }

                  {console.log(user)}
                  {row?.isActive ? (
                    <span className="bg-[#14a44d] px-5 py-1 rounded-2xl text-white">
                      Active
                    </span>
                  ) : (
                    //   console.log()
                    <span className="bg-[#e4a11b] px-5 py-1 rounded-2xl text-white">
                      Pending
                    </span>
                  )}
                  {/* </Button> */}
                </TableCell>
                {/* <TableCell align="right">{row.fat}</TableCell> */}
                {/* <TableCell align="right">{row.carbs}</TableCell> */}
                {/* <TableCell align="right">{row.protein}</TableCell> */}
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}

export default Users;
