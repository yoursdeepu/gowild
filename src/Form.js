import React, { useState, useEffect } from "react";
import axios from "axios";
import { Grid } from "@mui/material";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import InputAdornment from "@mui/material/InputAdornment";
import FilledInput from "@mui/material/FilledInput";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";

function Form() {
  const [formData, setFormData] = useState({
    guide_id: null,
    titles: "",
    first_name: "",
    last_name: "",
    bio: "",
    image: null,
    dob: "",
    gender: "",
    guide_city: "",
    guide_state: "",
    guide_country: "",
    contact_number: "",
    whatsapp_number: "",
    email: "",
    languages: "",
    activities: "",
    hobbies: "",
    guide_spot_city: "",
    guide_spot_places: "",
    experience: null,
    price_per_day: null,
    aadhar_id: null,
    pan_id: null,
    other_id: null,
    submitted_by: "",
    submitted_name: "",
    submitted_phone: "",

  });

  const [openSuccessDialog, setOpenSuccessDialog] = useState(false);
  const [openFailDialog, setOpenFailDialog] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const handleFormSubmit = () => {
    try {
      // Send the form data to the API endpoint for posting

      const response = axios.post(
        "https://ojasbarik.pythonanywhere.com/test/guide_personal_details",
        formData,
        {
          headers: {
            'Content-Type': 'application/json'
          }
        }
      )

      if (response.status === 200) {
        // On success, open the "Thank you" dialog
        setOpenSuccessDialog(true);
      } else {
        // On failure, display an error message and open the "Fail" dialog
        setErrorMessage("Submission failed. Please try again.");
        setOpenFailDialog(true);
      }
    } catch (error) {
      console.error(error);
      setErrorMessage("An error occurred. Please try again later.");
      setOpenFailDialog(true);
    }
  };

  const handleCloseSuccessDialog = () => {
    setOpenSuccessDialog(false);
  };

  const handleCloseFailDialog = () => {
    setOpenFailDialog(false);
  };

  return (
    <Box>
      <Typography
        variant="h4"
        sx={{ fontWeight: "bold", textAlign: "center" }}
        component="div"
      >
        Kindly Fill up these details
      </Typography>
      <FormControl sx={{ margin: "10%", width: "80%" }}>
        <Typography variant="h4" sx={{ fontWeight: "bold" }} component="div">
          Personal Details
        </Typography>
        <Card sx={{ minWidth: 175, m: 1 }}>
          <CardContent>
            <Typography
              variant="h5"
              sx={{ fontWeight: "bold" }}
              component="div"
            >
              Id
            </Typography>
            <TextField
              label="guide_id"
              variant="filled"
              sx={{ m: 1, minWidth: 120, display: "flex" }}
              value={formData.guide_id}
              onChange={(e) =>
                setFormData({ ...formData, guide_id: e.target.value })
              }
              required
            />
          </CardContent>
        </Card>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6} md={4}>
            <Card sx={{ maxWidth: 375, minWidth: 200, m: 1 }}>
              <CardContent>
                <Typography
                  variant="h5"
                  sx={{ fontWeight: "bold" }}
                  component="div"
                >
                  Titles
                </Typography>

                <FormControl
                  variant="filled"
                  sx={{ m: 1, minWidth: 120, display: "flex" }}
                >
                  <InputLabel id="title">Titles</InputLabel>
                  <Select
                    labelId="title"
                    id="title"
                    value={formData.title}
                    onChange={(e) =>
                      setFormData({ ...formData, title: e.target.value })
                    }
                    required
                  >
                    <MenuItem value="">
                      <em>None</em>
                    </MenuItem>
                    <MenuItem value={'mr'}>Mr</MenuItem>
                    <MenuItem value={'mrs'}>Mrs</MenuItem>
                    <MenuItem value={'miss'}>Miss</MenuItem>
                  </Select>
                </FormControl>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Card sx={{ maxWidth: 375, minWidth: 200, m: 1 }}>
              <CardContent>
                <Typography
                  variant="h5"
                  sx={{ fontWeight: "bold" }}
                  component="div"
                >
                  First Name
                </Typography>
                <TextField
                  label="First Name"
                  variant="filled"
                  sx={{ m: 1, minWidth: 120, display: "flex" }}
                  value={formData.first_name}
                  onChange={(e) =>
                    setFormData({ ...formData, first_name: e.target.value })
                  }
                  required
                />
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Card sx={{ maxWidth: 375, minWidth: 200, m: 1 }}>
              <CardContent>
                <Typography
                  variant="h5"
                  sx={{ fontWeight: "bold" }}
                  component="div"
                >
                  Last Name
                </Typography>
                <TextField
                  label="Last Name"
                  variant="filled"
                  sx={{ m: 1, minWidth: 120, display: "flex" }}
                  value={formData.last_name}
                  onChange={(e) =>
                    setFormData({ ...formData, last_name: e.target.value })
                  }
                  required
                />
              </CardContent>
            </Card>
          </Grid>
        </Grid>

        <Card sx={{ minWidth: 175, m: 1 }}>
          <CardContent>
            <Typography
              variant="h5"
              sx={{ fontWeight: "bold" }}
              component="div"
            >
              Bio
            </Typography>
            <TextField
              label="Bio"
              variant="filled"
              sx={{ m: 1, minWidth: 120, display: "flex" }}
              value={formData.bio}
              onChange={(e) =>
                setFormData({ ...formData, bio: e.target.value })
              }
              required
            />
          </CardContent>
        </Card>

        <Card sx={{ minWidth: 175, m: 1 }}>
          <CardContent>
            <Typography
              variant="h5"
              sx={{ fontWeight: "bold" }}
              component="div"
            >
              Submit Your Image
            </Typography>
            <TextField
              type="file"
              value={formData.image}
              variant="filled"
              sx={{ m: 1, minWidth: 120, display: "flex" }}
              name="image"
              onChange={(e) =>
                setFormData({ ...formData, image: e.target.value })
              }
              required
            />
          </CardContent>
        </Card>

        <Box
          display={{ xs: "block", sm: "flex" }}
          justifyContent="center"
          alignItems="center"
        >
          <Card sx={{ minWidth: "30%", m: 1 }}>
            <CardContent>
              <Typography
                variant="h5"
                sx={{ fontWeight: "bold" }}
                component="div"
              >
                DOB
              </Typography>

              <FormControl fullWidth sx={{ m: 1 }} variant="filled">
                <TextField
                  type='date'
                  variant="filled"
                  sx={{ m: 1, minWidth: 120, display: "flex" }}
                  value={formData.dob}
                  id="dob"
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      dob: e.target.value,
                    })
                  }
                  required
                />
              </FormControl>
            </CardContent>
          </Card>
          <Card sx={{ minWidth: "70%", m: 1 }}>
            <CardContent>
              <Typography
                variant="h5"
                sx={{ fontWeight: "bold" }}
                component="div"
              >
                Gender
              </Typography>
              <FormControl>
                <RadioGroup
                  row
                  aria-labelledby="demo-row-radio-buttons-group-label"
                  name="row-radio-buttons-group"
                  sx={{ m: 3, minWidth: 120, display: "flex" }}
                  value={formData.gender}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      gender: e.target.value,
                    })
                  }
                  required
                >
                  <FormControlLabel
                    value="female"
                    control={<Radio />}
                    label="Female"
                  />
                  <FormControlLabel
                    value="male"
                    control={<Radio />}
                    label="Male"
                  />
                  <FormControlLabel
                    value="other"
                    control={<Radio />}
                    label="Other"
                  />
                </RadioGroup>
              </FormControl>
            </CardContent>
          </Card>
        </Box>

        <FormControl sx={{ width: "100%" }}>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6} md={4}>
              <Card sx={{ maxWidth: 375, minWidth: 200, m: 1 }}>
                <CardContent>
                  <Typography
                    variant="h5"
                    sx={{ fontWeight: "bold" }}
                    component="div"
                  >
                    City
                  </Typography>

                  <FormControl
                    variant="filled"
                    sx={{ m: 1, minWidth: 120, display: "flex" }}
                  >
                    <InputLabel id="city">Select City</InputLabel>
                    <Select
                      labelId="City"
                      id="city"
                      value={formData.city}
                      onChange={(e) =>
                        setFormData({ ...formData, city: e.target.value })
                      }
                      required
                    >
                      <MenuItem value="">
                        <em>None</em>
                      </MenuItem>
                      <MenuItem value={'delhi'}>Delhi</MenuItem>
                      <MenuItem value={'indore'}>Indore</MenuItem>
                      <MenuItem value={'mumbai'}>Mumbai</MenuItem>
                    </Select>
                  </FormControl>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <Card sx={{ maxWidth: 375, minWidth: 200, m: 1 }}>
                <CardContent>
                  <Typography
                    variant="h5"
                    sx={{ fontWeight: "bold" }}
                    component="div"
                  >
                    State
                  </Typography>

                  <FormControl
                    variant="filled"
                    sx={{ m: 1, minWidth: 120, display: "flex" }}
                  >
                    <InputLabel id="city">Select State</InputLabel>
                    <Select
                      labelId="state"
                      id="state"
                      value={formData.state}
                      onChange={(e) =>
                        setFormData({ ...formData, state: e.target.value })
                      }
                      required
                    >
                      <MenuItem value="">
                        <em>None</em>
                      </MenuItem>
                      <MenuItem value={'mp'}>Madhya Pradesh</MenuItem>
                      <MenuItem value={'up'}>Utter Pradesh</MenuItem>
                      <MenuItem value={'rajisthan'}>Rajisthan</MenuItem>
                    </Select>
                  </FormControl>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <Card sx={{ maxWidth: 375, minWidth: 200, m: 1 }}>
                <CardContent>
                  <Typography
                    variant="h5"
                    sx={{ fontWeight: "bold" }}
                    component="div"
                  >
                    Country
                  </Typography>

                  <FormControl
                    variant="filled"
                    sx={{ m: 1, minWidth: 120, display: "flex" }}
                  >
                    <InputLabel id="city">Select Country</InputLabel>
                    <Select
                      labelId="country"
                      id="country"
                      value={formData.country}
                      onChange={(e) =>
                        setFormData({ ...formData, country: e.target.value })
                      }
                      required
                    >
                      <MenuItem value="">
                        <em>None</em>
                      </MenuItem>
                      <MenuItem value={'india'}>India</MenuItem>
                      <MenuItem value={'pakistan'}>Pakistan</MenuItem>
                      <MenuItem value={'uk'}>UK</MenuItem>
                    </Select>
                  </FormControl>
                </CardContent>
              </Card>
            </Grid>
          </Grid>

          <Typography variant="h5" sx={{ fontWeight: "bold" }} component="div">
            Your Contect Information
          </Typography>
          <Box
            display={{ xs: "block", sm: "flex" }}
            justifyContent="center"
            alignItems="center"
          >
            <Card sx={{ minWidth: "50%", m: 1 }}>
              <CardContent>
                <Typography
                  variant="h5"
                  sx={{ fontWeight: "bold" }}
                  component="div"
                >
                  Contact No.
                </Typography>

                <FormControl fullWidth sx={{ m: 1 }} variant="filled">
                  <FilledInput
                    label="contact_number"
                    sx={{ m: 1, minWidth: 120, display: "flex" }}
                    type="tel"
                    value={formData.contact_number}
                    id="filled-adornment-amount"
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        contact_number: e.target.value,
                      })
                    }
                    required
                    startAdornment={
                      <InputAdornment position="start">+91</InputAdornment>
                    }
                  />
                </FormControl>
              </CardContent>
            </Card>
            <Card sx={{ minWidth: "50%", m: 1 }}>
              <CardContent>
                <Typography
                  variant="h5"
                  sx={{ fontWeight: "bold" }}
                  component="div"
                >
                  Whatsapp No.
                </Typography>

                <FormControl fullWidth sx={{ m: 1 }} variant="filled">
                  <FilledInput
                    label="whatsapp_number"
                    sx={{ m: 1, minWidth: 120, display: "flex" }}
                    type="tel"
                    value={formData.whatsapp_number}
                    id="filled-adornment-amount"
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        whatsapp_number: e.target.value,
                      })
                    }
                    required
                    startAdornment={
                      <InputAdornment position="start">+91</InputAdornment>
                    }
                  />
                </FormControl>
              </CardContent>
            </Card>
          </Box>

          <Card sx={{ minWidth: 175, m: 1 }}>
            <CardContent>
              <Typography
                variant="h5"
                sx={{ fontWeight: "bold" }}
                component="div"
              >
                Email Id
              </Typography>
              <TextField
                label="User@gmail.com"
                type="email"
                variant="filled"
                sx={{ m: 1, minWidth: 120, display: "flex" }}
                value={formData.email}
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
                required
              />
            </CardContent>
          </Card>

          <Typography variant="h5" sx={{ fontWeight: "bold" }} component="div">
            Addtional Information
          </Typography>
          <Box
            display={{ xs: "block", sm: "flex" }}
            justifyContent="center"
            alignItems="center"
          >
            <Card sx={{ maxWidth: 375, minWidth: "100%", m: 1 }}>
              <CardContent>
                <Typography
                  variant="h5"
                  sx={{ fontWeight: "bold" }}
                  component="div"
                >
                  Languages
                </Typography>

                <FormControl
                  variant="filled"
                  sx={{ m: 1, minWidth: 120, display: "flex" }}
                >
                  <InputLabel id="city">Select Language</InputLabel>
                  <Select
                    labelId="languages"
                    id="languages"
                    value={formData.languages}
                    onChange={(e) =>
                      setFormData({ ...formData, languages: e.target.value })
                    }
                    required
                  >
                    <MenuItem value="">
                      <em>None</em>
                    </MenuItem>
                    <MenuItem value={'english'}>English</MenuItem>
                    <MenuItem value={'hindi'}>Hindi</MenuItem>
                    <MenuItem value={'urdu'}>Urdu</MenuItem>
                  </Select>
                </FormControl>
              </CardContent>
            </Card>
          </Box>
          <Box
            display={{ xs: "block", sm: "flex" }}
            justifyContent="center"
            alignItems="center"
          >
            <Card sx={{ maxWidth: 375, minWidth: "100%", m: 1 }}>
              <CardContent>
                <Typography
                  variant="h5"
                  sx={{ fontWeight: "bold" }}
                  component="div"
                >
                  Activites
                </Typography>

                <FormControl
                  variant="filled"
                  sx={{ m: 1, minWidth: 120, display: "flex" }}
                >
                  <InputLabel id="city">Select Activites</InputLabel>
                  <Select
                    labelId="activities"
                    id="activities"
                    value={formData.activities}
                    onChange={(e) =>
                      setFormData({ ...formData, activities: e.target.value })
                    }
                    required
                  >
                    <MenuItem value="">
                      <em>None</em>
                    </MenuItem>
                    <MenuItem value={'cricket'}>Cricket</MenuItem>
                    <MenuItem value={'football'}>Football</MenuItem>
                    <MenuItem value={'basketball'}>Basketball</MenuItem>
                  </Select>
                </FormControl>
              </CardContent>
            </Card>
          </Box>
          <Box
            display={{ xs: "block", sm: "flex" }}
            justifyContent="center"
            alignItems="center"
          >
            <Card sx={{ maxWidth: 375, minWidth: "100%", m: 1 }}>
              <CardContent>
                <Typography
                  variant="h5"
                  sx={{ fontWeight: "bold" }}
                  component="div"
                >
                  Languages
                </Typography>

                <FormControl
                  variant="filled"
                  sx={{ m: 1, minWidth: 120, display: "flex" }}
                >
                  <InputLabel id="city">Select Language</InputLabel>
                  <Select
                    labelId="hobbies"
                    id="hobbies"
                    value={formData.hobbies}
                    onChange={(e) =>
                      setFormData({ ...formData, hobbies: e.target.value })
                    }
                    required
                  >
                    <MenuItem value="">
                      <em>None</em>
                    </MenuItem>
                    <MenuItem value={'singing'}>singing</MenuItem>
                    <MenuItem value={'swimming'}>swimming</MenuItem>
                    <MenuItem value={'music'}>Music</MenuItem>
                  </Select>
                </FormControl>
              </CardContent>
            </Card>
          </Box>

          <Typography variant="h5" sx={{ fontWeight: "bold" }} component="div">
            Guide Spot
          </Typography>
          <Box
            display={{ xs: "block", sm: "flex" }}
            justifyContent="center"
            alignItems="center"
          >
            <Card sx={{ minWidth: "50%", m: 1 }}>
              <CardContent>
                <Typography
                  variant="h5"
                  sx={{ fontWeight: "bold" }}
                  component="div"
                >
                  City
                </Typography>
                <FormControl
                  variant="filled"
                  sx={{ m: 1, minWidth: 120, display: "flex" }}
                >
                  <InputLabel id="city">Select City</InputLabel>
                  <Select
                    labelId="guide_spot_city"
                    id="cityguide_spot_city"
                    value={formData.guide_spot_city}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        guide_spot_city: e.target.value,
                      })
                    }
                    required
                  >
                    <MenuItem value="">
                      <em>None</em>
                    </MenuItem>
                    <MenuItem value={'indore'}>Indore </MenuItem>
                    <MenuItem value={'delhi'}>Delhi</MenuItem>
                    <MenuItem value={'mumbai'}>Mumbai</MenuItem>
                  </Select>
                </FormControl>
              </CardContent>
            </Card>
            <Card sx={{ minWidth: "50%", m: 1 }}>
              <CardContent>
                <Typography
                  variant="h5"
                  sx={{ fontWeight: "bold" }}
                  component="div"
                >
                  Places
                </Typography>
                <FormControl
                  variant="filled"
                  sx={{ m: 1, minWidth: 120, display: "flex" }}
                >
                  <InputLabel id="city">Select Years</InputLabel>
                  <Select
                    labelId="guide_spot_places"
                    id="guide_spot_places"
                    value={formData.guide_spot_places}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        guide_spot_places: e.target.value,
                      })
                    }
                    required
                  >
                    <MenuItem value="">
                      <em>None</em>
                    </MenuItem>
                    <MenuItem value={1}>1</MenuItem>
                    <MenuItem value={2}>2</MenuItem>
                    <MenuItem value={3}>3</MenuItem>
                    <MenuItem value={4}>4</MenuItem>
                  </Select>
                </FormControl>
              </CardContent>
            </Card>
          </Box>

          <Typography variant="h5" sx={{ fontWeight: "bold" }} component="div">
            Experience & Price
          </Typography>
          <Box
            display={{ xs: "block", sm: "flex" }}
            justifyContent="center"
            alignItems="center"
          >
            <Card sx={{ minWidth: "50%", m: 1 }}>
              <CardContent>
                <Typography
                  variant="h5"
                  sx={{ fontWeight: "bold" }}
                  component="div"
                >
                  Years of Experience
                </Typography>
                <FormControl
                  variant="filled"
                  sx={{ m: 1, minWidth: 120, display: "flex" }}
                >
                  <InputLabel id="city">Select Years</InputLabel>
                  <Select
                    labelId="experience"
                    id="experience"
                    value={formData.experience}
                    onChange={(e) =>
                      setFormData({ ...formData, experience: e.target.value })
                    }
                    required
                  >
                    <MenuItem value="">
                      <em>None</em>
                    </MenuItem>
                    <MenuItem value={'1yr'}>1yr </MenuItem>
                    <MenuItem value={'2yr'}>2yr</MenuItem>
                    <MenuItem value={'3yr'}>3yr</MenuItem>
                  </Select>
                </FormControl>
              </CardContent>
            </Card>
            <Card sx={{ minWidth: "50%", m: 1 }}>
              <CardContent>
                <Typography
                  variant="h5"
                  sx={{ fontWeight: "bold" }}
                  component="div"
                >
                  Price per day
                </Typography>
                <TextField
                  label="Price"
                  type="number"
                  variant="filled"
                  sx={{ m: 1, minWidth: 120, display: "flex" }}
                  value={formData.price_per_day}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      price_per_day: e.target.value,
                    })
                  }
                  required
                />
              </CardContent>
            </Card>
          </Box>
          <Typography variant="h5" sx={{ fontWeight: "bold" }} component="div">
            KYC Documents
          </Typography>

          <Box
            display={{ xs: "block", sm: "flex" }}
            justifyContent="center"
            alignItems="center"
          >
            <Card sx={{ minWidth: "100%", m: 1 }}>
              <CardContent>
                <Typography
                  variant="h5"
                  sx={{ fontWeight: "bold" }}
                  component="div"
                >
                  Aadhar Id
                </Typography>
                <TextField
                  type="file"
                  value={formData.aadhar_id}
                  variant="filled"
                  sx={{ m: 1, minWidth: 120, display: "flex" }}
                  name="aadhar_id"
                  onChange={(e) =>
                    setFormData({ ...formData, aadhar_id: e.target.value })
                  }
                  required
                />
              </CardContent>
            </Card>
          </Box>
          <Box
            display={{ xs: "block", sm: "flex" }}
            justifyContent="center"
            alignItems="center"
          >
            <Card sx={{ minWidth: "100%", m: 1 }}>
              <CardContent>
                <Typography
                  variant="h5"
                  sx={{ fontWeight: "bold" }}
                  component="div"
                >
                  Pan Id
                </Typography>
                <TextField
                  type="file"
                  value={formData.pan_id}
                  variant="filled"
                  sx={{ m: 1, minWidth: 120, display: "flex" }}
                  name="pan_id"
                  onChange={(e) =>
                    setFormData({ ...formData, pan_id: e.target.value })
                  }
                  required
                />
              </CardContent>
            </Card>
          </Box>
          <Box
            display={{ xs: "block", sm: "flex" }}
            justifyContent="center"
            alignItems="center"
          >
            <Card sx={{ minWidth: "100%", m: 1 }}>
              <CardContent>
                <Typography
                  variant="h5"
                  sx={{ fontWeight: "bold" }}
                  component="div"
                >
                  Other Id
                </Typography>
                <TextField
                  type="file"
                  value={formData.other_id}
                  variant="filled"
                  sx={{ m: 1, minWidth: 120, display: "flex" }}
                  name="image"
                  onChange={(e) =>
                    setFormData({ ...formData, other_id: e.target.value })
                  }
                  required
                />
              </CardContent>
            </Card>
          </Box>
          <Box
            display={{ xs: "block", sm: "flex" }}
            justifyContent="center"
            alignItems="center"
          >
            <Card sx={{ minWidth: "50%", m: 1 }}>
              <CardContent>
                <Typography
                  variant="h5"
                  sx={{ fontWeight: "bold" }}
                  component="div"
                >
                  Submitted By
                </Typography>
                <TextField
                  label="Submitted By"
                  variant="filled"
                  sx={{ m: 1, minWidth: 120, display: "flex" }}
                  value={formData.submitted_by}
                  onChange={(e) =>
                    setFormData({ ...formData, submitted_by: e.target.value })
                  }
                  required
                />
              </CardContent>
            </Card>
            <Card sx={{ minWidth: "50%", m: 1 }}>
              <CardContent>
                <Typography
                  variant="h5"
                  sx={{ fontWeight: "bold" }}
                  component="div"
                >
                  Submitted By Name
                </Typography>
                <TextField
                  label="Submitted Name"
                  variant="filled"
                  sx={{ m: 1, minWidth: 120, display: "flex" }}
                  value={formData.submitted_name}
                  onChange={(e) =>
                    setFormData({ ...formData, submitted_name: e.target.value })
                  }
                  required
                />
              </CardContent>
            </Card>
          </Box>
          <Card sx={{ minWidth: "50%", m: 1 }}>
            <CardContent>
              <Typography
                variant="h5"
                sx={{ fontWeight: "bold" }}
                component="div"
              >
                Submitted By Phone
              </Typography>

              <FormControl fullWidth sx={{ m: 1 }} variant="filled">
                <InputLabel htmlFor="filled-adornment-amount">
                  Phone
                </InputLabel>
                <FilledInput
                  label="Phone"
                  type="tel"
                  value={formData.submitted_phone}
                  id="filled-adornment-amount"
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      submitted_phone: e.target.value,
                    })
                  }
                  required
                  startAdornment={
                    <InputAdornment position="start">+91</InputAdornment>
                  }
                />
              </FormControl>
            </CardContent>


          </Card>


          {/* <Card sx={{ minWidth: "100%", m: 1 }}>
            <CardContent>
              <Typography
                variant="h5"
                sx={{ fontWeight: "bold" }}
                component="div"
              >
                Created at
              </Typography>

              <FormControl fullWidth sx={{ m: 1 }} variant="filled">
                <TextField
                  type='date'
                  variant="filled"
                  sx={{ m: 1, minWidth: 120, display: "flex" }}
                  value={formData.created_at}
                  id="created_at"
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      created_at: e.target.value,
                    })
                  }
                  required
                />
              </FormControl>
            </CardContent>
          </Card>

          <Card sx={{ minWidth: "100%", m: 1 }}>
            <CardContent>
              <Typography
                variant="h5"
                sx={{ fontWeight: "bold" }}
                component="div"
              >
                DOB
              </Typography>

              <FormControl fullWidth sx={{ m: 1 }} variant="filled">
                <TextField
                  type='date'
                  variant="filled"
                  sx={{ m: 1, minWidth: 120, display: "flex" }}
                  value={formData.updated_at}
                  id="updated_at"
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      updated_at: e.target.value,
                    })
                  }
                  required
                />
              </FormControl>
            </CardContent>
          </Card> */}


        </FormControl>

        <Button variant="contained" color="primary" onClick={handleFormSubmit}>
          Submit
        </Button>
      </FormControl>

      {/* "Thank you" dialog */}
      <Dialog open={openSuccessDialog} onClose={handleCloseSuccessDialog}>
        <DialogContent>Thank you for your submission.</DialogContent>
        <DialogActions>
          <Button onClick={handleCloseSuccessDialog} color="primary">
            Close
          </Button>
        </DialogActions>
      </Dialog>
      {/* "Fail" dialog */}
      <Dialog open={openFailDialog} onClose={handleCloseFailDialog}>
        <DialogContent>{errorMessage}</DialogContent>
        <DialogActions>
          <Button onClick={handleCloseFailDialog} color="primary">
            Close
          </Button>
          <Button onClick={handleFormSubmit} color="primary">
            Resubmit
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
}

export default Form;
