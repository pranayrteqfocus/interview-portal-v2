import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import SettingsIcon from "@mui/icons-material/Settings";
import PersonIcon from "@mui/icons-material/Person";
import MailIcon from "@mui/icons-material/Mail";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import Toolbar from "@mui/material/Toolbar";
import { Logout } from "@mui/icons-material";
import CustomDialog from "../Custom/Dialog";
import { useRouter } from "next/router";

const drawerWidth = 60;

interface Props {
  window?: () => Window;
}

interface TabType {
  icon: React.ReactNode;
  selected: boolean;
  onClick: () => void;
}

export default function Sidebar(props: Props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [selectedTab, setSelectedTab] = React.useState(-1);
  const [dialogOpen, setDialogOpen] = React.useState(false);
  const router = useRouter();
  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };
  const useStyle = {
    icon: {
      color: "#F9F9F9",
    },
    selectedItem: {
      backgroundColor: "#3D3C42",
    },
  };

  const tabsData: TabType[] = [
    {
      icon: <PersonIcon sx={useStyle.icon} />,
      selected: selectedTab === 0,
      onClick: () => setSelectedTab(0),
    },
    {
      icon: <MailIcon sx={useStyle.icon} />,
      selected: selectedTab === 1,
      onClick: () => setSelectedTab(1),
    },
    {
      icon: <SearchIcon sx={useStyle.icon} />,
      selected: selectedTab === 2,
      onClick: () => setSelectedTab(2),
    },
  ];

  const renderTabs = ({ icon, selected, onClick }: TabType, index: number) => (
    <ListItem key={index} disablePadding>
      <ListItemButton
        sx={{
          "&.Mui-selected": {
            backgroundColor: useStyle.selectedItem,
          },
        }}
        selected={selected}
        onClick={onClick}
      >
        <ListItemIcon>{icon}</ListItemIcon>
      </ListItemButton>
    </ListItem>
  );

  const drawer = (
    <div>
      <Toolbar />
      <List>{tabsData.map(renderTabs)}</List>
      <List style={{ position: "absolute", bottom: 20 }}>
        <ListItem disablePadding>
          <ListItemButton
            sx={{
              "&.Mui-selected": {
                backgroundColor: useStyle.selectedItem,
              },
            }}
            selected={selectedTab === 3}
            onClick={() => setSelectedTab(3)}
          >
            <ListItemIcon>
              <SettingsIcon sx={useStyle.icon} />
            </ListItemIcon>
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton
            sx={{
              "&.Mui-selected": {
                backgroundColor: useStyle.selectedItem,
              },
            }}
            selected={selectedTab === 4}
            onClick={() => {
              setDialogOpen(true);
              setSelectedTab(4);
            }}
          >
            <ListItemIcon>
              <Logout sx={useStyle.icon} />
            </ListItemIcon>
          </ListItemButton>
        </ListItem>
      </List>
    </div>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
          backgroundColor: "transparent",
        }}
        elevation={0}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: "none" }, color: "black" }}
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
              overflowX: "hidden",
              backgroundColor: "#be8b78",
            },
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: "none", sm: "block" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
              backgroundColor: "#be8b78",
              overflowX: "hidden",
            },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 3,
          width: { sm: `calc(100% - ${drawerWidth}px)` },
        }}
      >
        <Toolbar />
      </Box>

      <CustomDialog
        contentText="Are you Sure? You want to Logout?"
        title="Warning"
        open={dialogOpen}
        handleClose={() => {
          setDialogOpen((prev) => !prev);
          setSelectedTab(-1);
        }}
        handleAccept={() => {
          localStorage.removeItem("username");
          setDialogOpen((prev) => !prev);
          router.push("/login");
        }}
      />
    </Box>
  );
}
