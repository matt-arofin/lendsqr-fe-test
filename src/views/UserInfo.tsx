import "../App.css";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Box } from "@mui/material";
import image from "../assets/elipse1.png";
import axios from "axios";

const root = "https://6270020422c706a0ae70b72c.mockapi.io/lendsqr/api/v1"; // separate for security

interface User {
	id: number;
	name: string;
	tier: string;
	loanAmount: string;
	fullName: string;
	phoneNumber: string;
	emailAddress: string;
	bvn: string;
	gender: string;
	maritalStatus: string;
	children: number;
	typeOfResidence: string;
	levelOfEducation: string;
	employmentStatus: string;
	sectorOfEmployment: string;
	durationOfEmployment: string;
	officeEmail: string;
	monthlyIncome: string;
	loanRepayment: string;
	twitter: string;
	facebook: string;
	instagram: string;
	guarantorFullName: string;
	guarantorPhoneNumber: string;
	guarantorEmailAddress: string;
	guarantorRelationship: string;
}

interface UserInfoProps {
  setIsLogin?: React.Dispatch<React.SetStateAction<boolean>>;
}

const UserInfo = ({ setIsLogin }: UserInfoProps) => {
	const { id } = useParams<{ id: string }>();
	const [user, setUser] = useState<User | null>(null);
	
	useEffect(() => {
    if (setIsLogin) {
      setIsLogin(false);
    }
  }, [setIsLogin]);

	useEffect(() => {
    if (id) {
      const fetchUserById = async (userId: string) => {
        try {
          const res = await axios.get(`${root}/users/${userId}`);
          setUser(res.data);
        } catch (error) {
          console.error(error);
        }
      };
      fetchUserById(id);
    }
	}, [id]);

	if (!user) {
		return <div>Loading...</div>;
	}

	return (
		<Box>
			<Box>
				<img src={image} alt={user.name} />
				<div>
					<div>{user.name}</div>
					<div>{user.tier}</div>
					<div>{`$${user.loanAmount}`}</div>
				</div>
			</Box>

			<Box>
				<h5>Personal Information</h5>
				<div>
					<div>{`Full Name: ${user.fullName}`}</div>
					<div>{`Phone Number: ${user.phoneNumber}`}</div>
					<div>{`Email Address: ${user.emailAddress}`}</div>
					<div>{`BVN: ${user.bvn}`}</div>
					<div>{`Gender: ${user.gender}`}</div>
				</div>
				<div>
					<div>{`Marital Status: ${user.maritalStatus}`}</div>
					<div>{`Children: ${user.children}`}</div>
					<div>{`Type of Residence: ${user.typeOfResidence}`}</div>
				</div>

				<h5>Education and Employment</h5>
				<div>
					<div>{`Level of Education: ${user.levelOfEducation}`}</div>
					<div>{`Employment Status: ${user.employmentStatus}`}</div>
					<div>{`Sector of Employment: ${user.sectorOfEmployment}`}</div>
					<div>{`Duration of Employment: ${user.durationOfEmployment}`}</div>
				</div>
				<div>
					<div>{`Office Email: ${user.officeEmail}`}</div>
					<div>{`Monthly Income: $${user.monthlyIncome}`}</div>
					<div>{`Loan Repayment: $${user.loanRepayment}`}</div>
				</div>

				<h5>Socials</h5>
				<div>
					<div>{`Twitter: ${user.twitter}`}</div>
					<div>{`Facebook: ${user.facebook}`}</div>
					<div>{`Instagram: ${user.instagram}`}</div>
				</div>

				<h5>Guarantor</h5>
				<div>
					<div>Full Name</div>
					<div>Phone Number</div>
					<div>Email Address</div>
					<div>Relationship</div>
				</div>
			</Box>
		</Box>
	);
};

export default UserInfo;
