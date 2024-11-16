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

export const navBaseUrl: string = "/website-portfolio/";

export default function Navigation() {
	/**
	 * functions for Drawer (small screen)
	 */
	const [open, setOpen] = React.useState(false);

	const toggleDrawer = (newOpen: boolean) => () => {
		setOpen(newOpen);
	};

	/**selected functions for bigger screens */
	const [selectedIndex, setSelectedIndex] = React.useState(1);

	const handleListItemClick = (
		_event: React.MouseEvent<HTMLDivElement, MouseEvent>,
		index: number
	) => {
		setSelectedIndex(index);
	};

	/**list needed for all */

	const menuItems = [
		{
			text: "Home",
			url: navBaseUrl,
			icon: <HomeRoundedIcon />,
			selectedIndex: 1,
		},
		{
			text: "About",
			url: navBaseUrl + "#about",
			icon: <InfoRoundedIcon />,
			selectedIndex: 2,
		},
		{
			text: "Projects",
			url: navBaseUrl + "#projects",
			icon: <LightbulbRoundedIcon />,
			selectedIndex: 3,
		},
	];

	/**
	 * sx is a prop from MUI to change the CSS in the component
	 * DrawerList for smaller screens
	 */

	const DrawerList = (
		<Box
			sx={{ width: 147 }}
			role="presentation"
			onClick={toggleDrawer(false)}
			className="drawer-box_btn"
		>
			<List>
				{menuItems.map((item) => (
					<ListItem
						key={item.text}
						disablePadding
						sx={{ fontWeight: "bold" }}
					>
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

	const buttonList = (
		<div>
			<List
				sx={{
					display: "flex",
					flexDirection: "row",
					padding: 0,
				}}
			>
				{menuItems.map((item) => (
					<ListItem
						alignItems="flex-start"
						key={item.text}
						disablePadding
					>
						<Link
							href={item.url}
							sx={{ color: "#ffff" }}
							underline="hover"
						>
							<ListItemButton
								sx={{ color: "#ffff" }}
								selected={selectedIndex === item.selectedIndex}
								onClick={(event) =>
									handleListItemClick(
										event,
										item.selectedIndex
									)
								}
							>
								<ListItemIcon sx={{ color: "#ffff" }}>
									{item.icon}
								</ListItemIcon>
								<ListItemText
									sx={{ fontWeight: "bolder" }}
									primary={item.text}
								/>
							</ListItemButton>
						</Link>
					</ListItem>
				))}
			</List>
		</div>
	);

	return (
		<div className="nav-parent">
			<div className="small-nav">
				<Button
					onClick={toggleDrawer(true)}
					startIcon={<MenuIcon></MenuIcon>}
					sx={{ fontWeight: "bold", color: "#ffff" }}
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
			<div className="big-nav">{buttonList}</div>
		</div>
	);
}
