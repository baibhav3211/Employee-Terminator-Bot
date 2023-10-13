import { Container } from '@mui/material'
import React from 'react'
import { useSelector } from 'react-redux'
import  { useEffect } from 'react';

const ProfilePage = () => {
  const user = useSelector(state => state.auth.value.user)
  useEffect(() => {}, []);
    return (
        <Container
        sx={{
          backgroundColor:"#F2F2F8"
        }}>
  
           
        <Container
          sx={{
            display: "flex",
            justifyContent: "center",
            backgroundColor: "#FFFFFF",
            maxHeight: "100px",
            fontFamily: "Montserrat",
            fontSize: "20px",
            fontWeight: "bold",
            p: 1,
            mt:2,
            borderRadius: "30px"
  
          }}>
          Profile Details
        </Container>
  
  
  
        <Container
          sx={{
            display: "flex",
            flexDirection: "row",
            backgroundColor: "#FFFFFF",
            maxWidth: "none",
            fontFamily: "Montserrat",
            fontSize: "20px",
            p: 1,
            mt: 4
          }}
        >
          <Container
            sx={{
              display: "flex",
              flexDirection: "column",
              backgroundColor: "#FFFFFF",
              maxWidth: "none",
              fontFamily: "Montserrat",
              fontSize: "20px",
              p: 1,
              fontWeight: "bold",
            }}>
  
            Employee Id
          </Container>
  
          <Container
            sx={{
              display: "flex",
              flexDirection: "column",
              backgroundColor: "#FFFFFF",
              maxWidth: "none",
              fontFamily: "Montserrat",
              fontSize: "20px",
              p: 1,
              mr: "5",
            }}>
  
            {user.e_id}
          </Container>
  
  
        </Container>
        <Container
        sx={{
          display: "flex",
          flexDirection: "row",
          backgroundColor: "#FFFFFF",
          maxWidth: "none",
          fontFamily: "Montserrat",
          fontSize: "20px",
          p: 1
        }}
      >
        <Container
          sx={{
            display: "flex",
            flexDirection: "column",
            backgroundColor: "#FFFFFF",
            maxWidth: "none",
            fontFamily: "Montserrat",
            fontSize: "20px",
            p: 1,
            fontWeight: "bold",
          }}>

          Employee Name
        </Container>

        <Container
          sx={{
            display: "flex",
            flexDirection: "column",
            backgroundColor: "#FFFFFF",
            maxWidth: "none",
            fontFamily: "Montserrat",
            fontSize: "20px",
            p: 1,
            mr: "5",
          }}>

          {user.firstname} {user.lastname}
        </Container>


      </Container>
  
        <Container
          sx={{
            display: "flex",
            flexDirection: "row",
            backgroundColor: "#FFFFFF",
            maxWidth: "none",
            fontFamily: "Montserrat",
            fontSize: "20px",
            p: 1,
          }}
        >
          <Container
            sx={{
              display: "flex",
              flexDirection: "column",
              backgroundColor: "#FFFFFF",
              maxWidth: "none",
              fontFamily: "Montserrat",
              fontSize: "20px",
              p: 1,
              fontWeight: "bold",
            }}>
  
            Date of Joining
          </Container>
  
          <Container
            sx={{
              display: "flex",
              flexDirection: "column",
              backgroundColor: "#FFFFFF",
              maxWidth: "none",
              fontFamily: "Montserrat",
              fontSize: "20px",
              p: 1,
              mr: "5",
            }}>
  
            {user.doj}
          </Container>
  
        </Container>
  
        <Container
          sx={{
            display: "flex",
            flexDirection: "row",
            backgroundColor: "#FFFFFF",
            maxWidth: "none",
            fontFamily: "Montserrat",
            fontSize: "20px",
            p: 1,
          }}
        >
          <Container
            sx={{
              display: "flex",
              flexDirection: "column",
              backgroundColor: "#FFFFFF",
              maxWidth: "none",
              fontFamily: "Montserrat",
              fontSize: "20px",
              p: 1,
              fontWeight: "bold",
            }}>
  
            Job Title
          </Container>
  
          <Container
            sx={{
              display: "flex",
              flexDirection: "column",
              backgroundColor: "#FFFFFF",
              maxWidth: "none",
              fontFamily: "Montserrat",
              fontSize: "20px",
              p: 1,
              mr: "5",
            }}>
  
            {user.position}
          </Container>
  
        </Container>
  
        <Container
          sx={{
            display: "flex",
            flexDirection: "row",
            backgroundColor: "#FFFFFF",
            maxWidth: "none",
            fontFamily: "Montserrat",
            fontSize: "20px",
            p: 1,
          }}
        >
          <Container
            sx={{
              display: "flex",
              flexDirection: "column",
              backgroundColor: "#FFFFFF",
              maxWidth: "none",
              fontFamily: "Montserrat",
              fontSize: "20px",
              p: 1,
              fontWeight: "bold",
            }}>
  
            Department
          </Container>
  
          <Container
            sx={{
              display: "flex",
              flexDirection: "column",
              backgroundColor: "#FFFFFF",
              maxWidth: "none",
              fontFamily: "Montserrat",
              fontSize: "20px",
              p: 1,
              mr: "5",
            }}>
  
            {user.department}
          </Container>
  
        </Container>
  
        <Container
          sx={{
            display: "flex",
            flexDirection: "row",
            backgroundColor: "#FFFFFF",
            maxWidth: "none",
            fontFamily: "Montserrat",
            fontSize: "20px",
            p: 1,
          }}
        >
          <Container
            sx={{
              display: "flex",
              flexDirection: "column",
              backgroundColor: "#FFFFFF",
              maxWidth: "none",
              fontFamily: "Montserrat",
              fontSize: "20px",
              p: 1,
              fontWeight: "bold",
            }}>
  
            Employment Status
          </Container>
  
          <Container
            sx={{
              display: "flex",
              flexDirection: "column",
              backgroundColor: "#FFFFFF",
              maxWidth: "none",
              fontFamily: "Montserrat",
              fontSize: "20px",
              p: 1,
              mr: "5",
            }}>
  
            {user.status}
  
          </Container>
  
        </Container>
  
        <Container
          sx={{
            display: "flex",
            flexDirection: "row",
            backgroundColor: "#FFFFFF",
            maxWidth: "none",
            fontFamily: "Montserrat",
            fontSize: "20px",
            p: 1,
          }}
        >
          <Container
            sx={{
              display: "flex",
              flexDirection: "column",
              backgroundColor: "#FFFFFF",
              maxWidth: "none",
              fontFamily: "Montserrat",
              fontSize: "20px",
              p: 1,
              fontWeight: "bold",
            }}>
  
            Team Id
          </Container>
  
          <Container
            sx={{
              display: "flex",
              flexDirection: "column",
              backgroundColor: "#FFFFFF",
              maxWidth: "none",
              fontFamily: "Montserrat",
              fontSize: "20px",
              p: 1,
              mr: "5",
            }}>
  
            {user.teamId}
          </Container>
  
        </Container>
  
        <Container
        sx={{
          display: "flex",
          justifyContent: "center",
          backgroundColor: "#FFFFFF",
          maxHeight: "100px",
          fontFamily: "Montserrat",
          fontSize: "20px",
          fontWeight: "bold",
          p: 1,
          mt:5,
          borderRadius: "30px"
  
        }}>
        Compensation Details
      </Container>
  
  
      <Container
        sx={{
          display: "flex",
          flexDirection: "row",
          backgroundColor: "#FFFFFF",
          maxWidth: "none",
          fontFamily: "Montserrat",
          fontSize: "20px",
          p: 1,
          mt: 4
        }}
      >
        <Container
          sx={{
            display: "flex",
            flexDirection: "column",
            backgroundColor: "#FFFFFF",
            maxWidth: "none",
            fontFamily: "Montserrat",
            fontSize: "20px",
            p: 1,
            fontWeight: "bold",
          }}>
  
          Total Compensation
        </Container>
  
        <Container
          sx={{
            display: "flex",
            flexDirection: "column",
            backgroundColor: "#FFFFFF",
            maxWidth: "none",
            fontFamily: "Montserrat",
            fontSize: "20px",
            p: 1,
            mr: "5",
          }}>
  
          {user.compensation}
        </Container>
  
       
      </Container>
  
      <Container
        sx={{
          display: "flex",
          flexDirection: "row",
          backgroundColor: "#FFFFFF",
          maxWidth: "none",
          fontFamily: "Montserrat",
          fontSize: "20px",
          p: 1,
        }}
      >
        <Container
          sx={{
            display: "flex",
            flexDirection: "column",
            backgroundColor: "#FFFFFF",
            maxWidth: "none",
            fontFamily: "Montserrat",
            fontSize: "20px",
            p: 1,
            fontWeight: "bold",
          }}>
  
        Frequency
        </Container>
  
        <Container
          sx={{
            display: "flex",
            flexDirection: "column",
            backgroundColor: "#FFFFFF",
            maxWidth: "none",
            fontFamily: "Montserrat",
            fontSize: "20px",
            p: 1,
            mr: "5" ,
          }}>
  
          Annual
        </Container>
        
      </Container>
  
      <Container
        sx={{
          display: "flex",
          flexDirection: "row",
          backgroundColor: "#FFFFFF",
          maxWidth: "none",
          fontFamily: "Montserrat",
          fontSize: "20px",
          p: 1,
        }}
      >
        <Container
          sx={{
            display: "flex",
            flexDirection: "column",
            backgroundColor: "#FFFFFF",
            maxWidth: "none",
            fontFamily: "Montserrat",
            fontSize: "20px",
            p: 1,
            fontWeight: "bold",
          }}>
  
          Bank Name
        </Container>
  
        <Container
          sx={{
            display: "flex",
            flexDirection: "column",
            backgroundColor: "#FFFFFF",
            maxWidth: "none",
            fontFamily: "Montserrat",
            fontSize: "20px",
            p: 1,
            mr: "5" ,
          }}>
  
          {user.bankName}
        </Container>
        
      </Container>
  
      <Container
        sx={{
          display: "flex",
          flexDirection: "row",
          backgroundColor: "#FFFFFF",
          maxWidth: "none",
          fontFamily: "Montserrat",
          fontSize: "20px",
          p: 1,
        }}
      >
        <Container
          sx={{
            display: "flex",
            flexDirection: "column",
            backgroundColor: "#FFFFFF",
            maxWidth: "none",
            fontFamily: "Montserrat",
            fontSize: "20px",
            p: 1,
            fontWeight: "bold",
          }}>
  
          Account Number
        </Container>
  
        <Container
          sx={{
            display: "flex",
            flexDirection: "column",
            backgroundColor: "#FFFFFF",
            maxWidth: "none",
            fontFamily: "Montserrat",
            fontSize: "20px",
            p: 1,
            mr: "5" ,
          }}>
  
          {user.account}
        </Container>
        
      </Container>
  
      <Container
        sx={{
          display: "flex",
          flexDirection: "row",
          backgroundColor: "#FFFFFF",
          maxWidth: "none",
          fontFamily: "Montserrat",
          fontSize: "20px",
          p: 1,
        }}
      >
        <Container
          sx={{
            display: "flex",
            flexDirection: "column",
            backgroundColor: "#FFFFFF",
            maxWidth: "none",
            fontFamily: "Montserrat",
            fontSize: "20px",
            p: 1,
            fontWeight: "bold",
          }}>
  
          IFSC Code
        </Container>
  
        <Container
          sx={{
            display: "flex",
            flexDirection: "column",
            backgroundColor: "#FFFFFF",
            maxWidth: "none",
            fontFamily: "Montserrat",
            fontSize: "20px",
            p: 1,
            mr: "5" ,
          }}>
  
            {user.ifsc}
          
        </Container>
        
      </Container>
  
  
      <Container
          sx={{
            display: "flex",
            justifyContent: "center",
            backgroundColor: "#FFFFFF",
            maxHeight: "100px",
            fontFamily: "Montserrat",
            fontSize: "20px",
            fontWeight: "bold",
            p: 1,
            mt: 5,
            borderRadius: "30px"
  
          }}>
          Personal Details
        </Container>
  
  
        <Container
          sx={{
            display: "flex",
            flexDirection: "row",
            backgroundColor: "#FFFFFF",
            maxWidth: "none",
            fontFamily: "Montserrat",
            fontSize: "20px",
            p: 1,
            mt: 4
          }}
        >
          <Container
            sx={{
              display: "flex",
              flexDirection: "column",
              backgroundColor: "#FFFFFF",
              maxWidth: "none",
              fontFamily: "Montserrat",
              fontSize: "20px",
              p: 1,
              fontWeight: "bold",
            }}>
  
            Date of Birth
          </Container>
  
          <Container
            sx={{
              display: "flex",
              flexDirection: "column",
              backgroundColor: "#FFFFFF",
              maxWidth: "none",
              fontFamily: "Montserrat",
              fontSize: "20px",
              p: 1,
              mr: "5",
            }}>
  
            {user.dob}
          </Container>
  
         
        </Container>
  
        <Container
          sx={{
            display: "flex",
            flexDirection: "row",
            backgroundColor: "#FFFFFF",
            maxWidth: "none",
            fontFamily: "Montserrat",
            fontSize: "20px",
            p: 1,
          }}
        >
          <Container
            sx={{
              display: "flex",
              flexDirection: "column",
              backgroundColor: "#FFFFFF",
              maxWidth: "none",
              fontFamily: "Montserrat",
              fontSize: "20px",
              p: 1,
              fontWeight: "bold",
            }}>
  
          Email
          </Container>
  
          <Container
            sx={{
              display: "flex",
              flexDirection: "column",
              backgroundColor: "#FFFFFF",
              maxWidth: "none",
              fontFamily: "Montserrat",
              fontSize: "20px",
              p: 1,
              mr: "5" ,
            }}>
  
            {user.email}
          </Container>
          
        </Container>
  
        <Container
          sx={{
            display: "flex",
            flexDirection: "row",
            backgroundColor: "#FFFFFF",
            maxWidth: "none",
            fontFamily: "Montserrat",
            fontSize: "20px",
            p: 1,
          }}
        >
          <Container
            sx={{
              display: "flex",
              flexDirection: "column",
              backgroundColor: "#FFFFFF",
              maxWidth: "none",
              fontFamily: "Montserrat",
              fontSize: "20px",
              p: 1,
              fontWeight: "bold",
            }}>
  
            Current Address
          </Container>
  
          <Container
            sx={{
              display: "flex",
              flexDirection: "column",
              backgroundColor: "#FFFFFF",
              maxWidth: "none",
              fontFamily: "Montserrat",
              fontSize: "20px",
              p: 1,
              mr: "5" ,
            }}>
  
            {user.address}
          </Container>
          
        </Container>
  
        <Container
          sx={{
            display: "flex",
            flexDirection: "row",
            backgroundColor: "#FFFFFF",
            maxWidth: "none",
            fontFamily: "Montserrat",
            fontSize: "20px",
            p: 1,
          }}
        >
          <Container
            sx={{
              display: "flex",
              flexDirection: "column",
              backgroundColor: "#FFFFFF",
              maxWidth: "none",
              fontFamily: "Montserrat",
              fontSize: "20px",
              p: 1,
              fontWeight: "bold",
            }}>
  
            City
          </Container>
  
          <Container
            sx={{
              display: "flex",
              flexDirection: "column",
              backgroundColor: "#FFFFFF",
              maxWidth: "none",
              fontFamily: "Montserrat",
              fontSize: "20px",
              p: 1,
              mr: "5" ,
            }}>
  
            {user.city}
          </Container>
          
        </Container>
  
        <Container
          sx={{
            display: "flex",
            flexDirection: "row",
            backgroundColor: "#FFFFFF",
            maxWidth: "none",
            fontFamily: "Montserrat",
            fontSize: "20px",
            p: 1,
          }}
        >
          <Container
            sx={{
              display: "flex",
              flexDirection: "column",
              backgroundColor: "#FFFFFF",
              maxWidth: "none",
              fontFamily: "Montserrat",
              fontSize: "20px",
              p: 1,
              fontWeight: "bold",
            }}>
  
            State
          </Container>
  
          <Container
            sx={{
              display: "flex",
              flexDirection: "column",
              backgroundColor: "#FFFFFF",
              maxWidth: "none",
              fontFamily: "Montserrat",
              fontSize: "20px",
              p: 1,
              mr: "5" ,
            }}>
  
              {user.state}
            
          </Container>
          
        </Container>
  
        <Container
          sx={{
            display: "flex",
            flexDirection: "row",
            backgroundColor: "#FFFFFF",
            maxWidth: "none",
            fontFamily: "Montserrat",
            fontSize: "20px",
            p: 1,
          }}
        >
          <Container
            sx={{
              display: "flex",
              flexDirection: "column",
              backgroundColor: "#FFFFFF",
              maxWidth: "none",
              fontFamily: "Montserrat",
              fontSize: "20px",
              p: 1,
              fontWeight: "bold",
            }}>
  
            Country
          </Container>
  
          <Container
            sx={{
              display: "flex",
              flexDirection: "column",
              backgroundColor: "#FFFFFF",
              maxWidth: "none",
              fontFamily: "Montserrat",
              fontSize: "20px",
              p: 1,
              mr: "5" ,
            }}>
  
            {user.country}
          </Container>
          
        </Container>
  
        </Container>
      )
}

export default ProfilePage