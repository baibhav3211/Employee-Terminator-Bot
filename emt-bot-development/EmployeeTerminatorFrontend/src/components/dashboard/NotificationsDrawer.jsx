import React, { useState } from "react";
import { IconButton, Badge, Popover, Typography, Button, Box, FormGroup, FormControlLabel, Switch, Stack, Alert } from "@mui/material";
import { CheckCircle, MarkChatRead, Notifications } from "@mui/icons-material";

const types = ["success", "info", "warning", "error"];

export default function NotificationsDrawer() {
    const [notifications, setNotifications] = useState([
        {
            id: 1,
            type: types[0],
            content: "Your order has been placed",
            read: false,
        },
        {
            id: 2,
            type: types[1],
            content: "Your order has been shipped",
            read: false,
        },
        {
            id: 3,
            type: types[2],
            content: "Your order has been delivered",
            read: false,
        },
        {
            id: 4,
            type: types[3],
            content: "Your order has been cancelled",
            read: false,
        }
    ]);

    const [anchorEl, setAnchorEl] = useState(null);
    const [showUnreadOnly, setShowUnreadOnly] = useState(false);

    const togglePopover = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const closePopover = () => {
        setAnchorEl(null);
    };

    const toggleFilter = () => {
        setShowUnreadOnly(!showUnreadOnly);
    };

    const markAsRead = (id) => {
        const updatedNotifications = notifications.map(notification => {
            if (notification.id === id) {
                return { ...notification, read: true };
            }
            return notification;
        });
        setNotifications(updatedNotifications);
    };

    const clear = () => {
        setNotifications([]);
        closePopover();
    };

    const unreadCount = notifications.filter(notification => !notification.read).length;

    return (
        <>
            <IconButton onClick={togglePopover}>
                <Badge badgeContent={unreadCount} color="primary">
                    <Notifications color="action" sx={{ color: "white" }} />
                </Badge>
            </IconButton>
            <Popover
                open={Boolean(anchorEl)}
                anchorEl={anchorEl}
                onClose={closePopover}
                anchorOrigin={{
                    vertical: "bottom",
                    horizontal: "right",
                }}
                transformOrigin={{
                    vertical: "top",
                    horizontal: "right",
                }}
            >
                <Box>
                    <Box
                        sx={{
                            padding: "16px",
                            display: "flex",
                            justifyContent: "space-between",
                            alignItems: "center",
                            minWidth: "400px",
                        }}
                    >
                        <Typography variant="h6" gutterBottom>
                            Notifications
                        </Typography>
                        <FormGroup>
                            <FormControlLabel
                                control={
                                    <Switch
                                        onChange={toggleFilter}
                                        checked={showUnreadOnly}
                                        style={{
                                              color: '#5A287D', // Change the color when checked to #5A287D
                                              
                                          }}
                                    />
                                }
                                label="Show unread only"
                            />
                        </FormGroup>
                    </Box>
                    <hr />
                    <Stack>
                        {(!notifications.length || (unreadCount === 0 && showUnreadOnly)) && (
                            <Typography variant="body1" sx={{ padding: "16px" }}>
                                Your queue is empty! You are all set{" "}
                                <span role="img" aria-label="dunno what to put">
                                    🎉
                                </span>
                            </Typography>
                        )}
                        {(showUnreadOnly ? notifications.filter((notification) => !notification.read) : notifications).map((notification) => {
                            return (
                                <Alert
                                    key={notification.id}
                                    severity={(notification.type) || "info"}
                                    action={
                                        notification.read ? (
                                            <CheckCircle />
                                        ) : (
                                            <IconButton
                                                color="inherit"
                                                aria-label="mark as read"
                                                component="span"
                                                onClick={() => markAsRead(notification.id)}
                                            >
                                                <MarkChatRead />
                                            </IconButton>
                                        )
                                    }
                                >
                                    {notification.content}
                                </Alert>
                            )
                        })}
                    </Stack>
                </Box>
                <div style={{ padding: "16px" }}>
                    <div style={{ marginTop: "16px", display: "flex", justifyContent: "space-between" }}>
                        <Button
                            variant="outlined"
                            onClick={clear}
                            sx={{ marginRight: "8px" }}
                        >
                            Clear All
                        </Button>
                        <Button variant="outlined" onClick={closePopover}>
                            Close
                        </Button>
                    </div>
                </div>
            </Popover>
        </>
    );
}
