import { Breadcrumb, BreadcrumbItem, BreadcrumbLink } from "@chakra-ui/react";
import { Link, useParams } from "react-router-dom";

export function Header() {
  return (
    <Breadcrumb m={"20px 0 20px 0"}>
      <BreadcrumbItem position={"relative"}>
        <BreadcrumbLink
          _before={{
            content: `""`,
            position: "absolute",
            top: "20px",
            left: 0,
            width: "0",
            height: "3px",
            backgroundColor: "#ccc",
            transition: "All 0.5s",
            transitionDelay: "0.2s",
          }}
          _hover={{
            _before: {
              width: "20%",
            },
            _after: {
              width: "55%",
              transitionDelay: "0.5s",
            },
          }}
          _after={{
            content: `""`,
            position: "absolute",
            top: "20px",
            left: "10px",
            width: "0",
            height: "3px",
            backgroundColor: "yellow",
            transition: "All 0.3s",
          }}
          as={Link}
          to={"/"}
        >
          Home
        </BreadcrumbLink>
      </BreadcrumbItem>

      <BreadcrumbItem position={"relative"}>
        <BreadcrumbLink
          _before={{
            content: `""`,
            position: "absolute",
            top: "20px",
            left: 0,
            width: "0",
            height: "3px",
            backgroundColor: "#ccc",
            transition: "All 0.5s",
            transitionDelay: "0.2s",
          }}
          _hover={{
            _before: {
              width: "20%",
            },
            _after: {
              width: "55%",
              transitionDelay: "0.5s",
            },
          }}
          _after={{
            content: `""`,
            position: "absolute",
            top: "20px",
            left: "10px",
            width: "0",
            height: "3px",
            backgroundColor: "blue",
            transition: "All 0.3s",
          }}
          as={Link}
          to={"/people"}
        >
          People
        </BreadcrumbLink>
      </BreadcrumbItem>
      <BreadcrumbItem position={"relative"}>
        <BreadcrumbLink
          _before={{
            content: `""`,
            position: "absolute",
            top: "20px",
            left: 0,
            width: "0",
            height: "3px",
            backgroundColor: "#ccc",
            transition: "All 0.5s",
            transitionDelay: "0.2s",
          }}
          _hover={{
            _before: {
              width: "20%",
            },
            _after: {
              width: "60%",
              transitionDelay: "0.5s",
            },
          }}
          _after={{
            content: `""`,
            position: "absolute",
            top: "20px",
            left: "10px",
            width: "0",
            height: "3px",
            backgroundColor: "red",
            transition: "All 0.3s",
          }}
          as={Link}
          to={"/planets"}
        >
          Planets
        </BreadcrumbLink>
      </BreadcrumbItem>
      <BreadcrumbItem position={"relative"}>
        <BreadcrumbLink
          _before={{
            content: `""`,
            position: "absolute",
            top: "20px",
            left: 0,
            width: "0",
            height: "3px",
            backgroundColor: "#ccc",
            transition: "All 0.5s",
            transitionDelay: "0.2s",
          }}
          _hover={{
            _before: {
              width: "20%",
            },
            _after: {
              width: "50%",
              transitionDelay: "0.5s",
            },
          }}
          _after={{
            content: `""`,
            position: "absolute",
            top: "20px",
            left: "10px",
            width: "0",
            height: "3px",
            backgroundColor: "purple",
            transition: "All 0.3s",
          }}
          as={Link}
          to={"/films"}
        >
          Films
        </BreadcrumbLink>
      </BreadcrumbItem>
      <BreadcrumbItem position={"relative"}>
        <BreadcrumbLink
          _before={{
            content: `""`,
            position: "absolute",
            top: "20px",
            left: 0,
            width: "0",
            height: "3px",
            backgroundColor: "#ccc",
            transition: "All 0.5s",
            transitionDelay: "0.2s",
          }}
          _hover={{
            _before: {
              width: "20%",
            },
            _after: {
              width: "90%",
              transitionDelay: "0.5s",
            },
          }}
          _after={{
            content: `""`,
            position: "absolute",
            top: "20px",
            left: "10px",
            width: "0",
            height: "3px",
            backgroundColor: "green",
            transition: "All 0.4s",
          }}
          as={Link}
          to={"/starships"}
        >
          Starships
        </BreadcrumbLink>
      </BreadcrumbItem>
    </Breadcrumb>
  );
}
