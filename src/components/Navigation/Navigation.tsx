import React from "react";
import "./Navigation.css";
import {
	Box,
	Button,
	Divider,
	Drawer,
	Link,
	List,
	ListItem,
	ListItemButton,
	ListItemIcon,
	ListItemText,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import HomeRoundedIcon from "@mui/icons-material/HomeRounded";
import InfoRoundedIcon from "@mui/icons-material/InfoRounded";
import LightbulbRoundedIcon from "@mui/icons-material/LightbulbRounded";

const drawerWidth = 147;

/** 
export default function ResponsiveDrawer() {
	//const { window } = props;
	const [mobileOpen, setMobileOpen] = React.useState(false);
	const [isClosing, setIsClosing] = React.useState(false);
  
const handleDrawerClose = () => {
	setIsClosing(true);
	setMobileOpen(false);
};

const handleDrawerTransitionEnd = () => {
	setIsClosing(false);
};

const handleDrawerToggle = () => {
	if (!isClosing) {
		setMobileOpen(!mobileOpen);
	}
};
const drawer = (
	<div>
		<Toolbar />
		<Divider />
		<List>
			{["Inbox", "Starred", "Send email", "Drafts"].map((text, index) => (
				<ListItem key={text} disablePadding>
					<ListItemButton>
						<ListItemIcon>ListItemIcon</ListItemIcon>
						<ListItemText primary={text} />
					</ListItemButton>
				</ListItem>
			))}
		</List>
		<Divider />
		<List>
			{["All mail", "Trash", "Spam"].map((text, index) => (
				<ListItem key={text} disablePadding>
					<ListItemButton>
						<ListItemIcon>ListItemIcon</ListItemIcon>
						<ListItemText primary={text} />
					</ListItemButton>
				</ListItem>
			))}
		</List>
	</div>
);
*/

/**
 * The navbaseUrl is seperate/different from the page url in main.tsx
 * 			<nav>
 * 				<a href={navBaseUrl}>
					<button className="navigationButton"> Home</button>
				</a>
				<a href={navBaseUrl + "#about"}>
					<button className="navigationButton"> About</button>
				</a>
				<a href={navBaseUrl + "#projects"}>
					<button className="navigationButton"> Projects</button>
				</a>
			</nav>

 */
export const navBaseUrl: string = "/website-portfolio/";

export default function Navigation() {
	const [open, setOpen] = React.useState(false);

	const toggleDrawer = (newOpen: boolean) => () => {
		setOpen(newOpen);
	};

	const menuItems = [
		{ text: "Home", url: navBaseUrl, icon: <HomeRoundedIcon /> },
		{
			text: "About",
			url: navBaseUrl + "#about",
			icon: <InfoRoundedIcon />,
		},
		{
			text: "Projects",
			url: navBaseUrl + "#projects",
			icon: <LightbulbRoundedIcon />,
		},
	];

	/**
	 * sx is a prop from MUI to change the CSS in the component
	 */

	const DrawerList = (
		<Box
			sx={{ width: drawerWidth }}
			role="presentation"
			onClick={toggleDrawer(false)}
			className="drawer-box_btn"
		>
			<List>
				{menuItems.map((item) => (
					<ListItem key={item.text} disablePadding>
						<Link
							href={item.url}
							sx={{ color: "#ffff" }}
							underline="hover"
						>
							<ListItemButton sx={{ color: "#ffff" }}>
								<ListItemIcon sx={{ color: "#ffff" }}>
									{item.icon}
								</ListItemIcon>
								<ListItemText primary={item.text} />
							</ListItemButton>
						</Link>
					</ListItem>
				))}
			</List>
			<Divider className="drawer-divider"></Divider>
		</Box>
	);

	return (
		<div>
			<Button
				onClick={toggleDrawer(true)}
				startIcon={<MenuIcon></MenuIcon>}
			>
				Menu
			</Button>
			<Drawer
				open={open}
				onClose={toggleDrawer(false)}
				PaperProps={{
					sx: {
						backgroundColor: "#10052b",
						color: "#fff",
						border: "solid 1px solid #fff",
					},
				}}
			>
				<h3>Navigation</h3>
				{DrawerList}
			</Drawer>
		</div>
	);
}
