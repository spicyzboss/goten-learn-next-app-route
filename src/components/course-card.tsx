import {
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Button,
  Typography,
  Avatar,
  Box,
  IconButton,
} from "@mui/material";
import Link from "next/link";

export type Course = {
  courseId: number;
  courseImage: string;
  courseName: string;
  courseCode: string;
  courseSemester: string;
};

export default function CourseCard(props: Course) {
  return (
    <Card
      sx={{
        maxWidth: 420,
        maxHeight: 380,
        borderRadius: 8,
        boxShadow: 3,
        color: "#1A458A",
        mx: "auto",
      }}
    >
      <CardMedia
        sx={{ height: 200 }}
        image={`${props.courseImage}`}
        title="suturing"
      />
      <CardContent>
        <Box display="grid" gridTemplateColumns="repeat(12,1fr)" gap={2}>
          <Box gridColumn="span 9">
            <Typography
              gutterBottom
              variant="h6"
              component="div"
              sx={{ mx: 2, fontWeight: "bold" }}
            >
              {props.courseName}
            </Typography>
            <Typography
              variant="body2"
              component="div"
              sx={{ display: "inline-flex", mx: 2, fontWeight: "bold" }}
            >
              <Box sx={{ mr: 4, fontWeight: "bold" }}>{props.courseCode}</Box>
              <Box sx={{ fontWeight: "bold" }}>
                ภาคการศึกษา {props.courseSemester}
              </Box>
            </Typography>
          </Box>
          <Box gridColumn="span 3" justifySelf="center">
            <IconButton>
              <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
            </IconButton>
          </Box>
        </Box>
      </CardContent>
      <CardActions
        sx={{ justifyContent: "center", alignItems: "center", mb: 1 }}
      >
        <Link href={"/home/course"}>
          <Button
            sx={{
              width: 360,
              borderRadius: 3,
              backgroundColor: "#1A458A",
              "&:hover": { backgroundColor: "#112D5A" },
            }}
            variant="contained"
          >
            <Box sx={{ display: "flex", color: "white" }}>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                ลงทะเบียนเรียน
              </Box>
            </Box>
          </Button>
        </Link>
      </CardActions>
    </Card>
  );
}
