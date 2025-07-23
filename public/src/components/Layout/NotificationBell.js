import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  FiBell, 
  FiX, 
  FiCheck, 
  FiStar, 
  FiTrendingUp, 
  FiUsers, 
  FiSettings,
  FiTrash2
} from 'react-icons/fi';

const NotificationBell = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [notifications, setNotifications] = useState([
    {
      id: 1,
      type: 'new_tool',
      title: 'New AI Tool Added',
      message: 'GPT-4 Turbo is now available in our platform',
      time: '2 min ago',
      read: false,
      icon: FiStar,
      color: 'text-accent-500'
    },
    {
      id: 2,
      type: 'trending',
      title: 'Trending Tool',
      message: 'Midjourney is trending with 50K+ searches today',
      time: '1 hour ago',
      read: false,
      icon: FiTrendingUp,
      color: 'text-primary-500'
    },
    {
      id: 3,
      type: 'community',
      title: 'Community Update',
      message: '500+ new users joined this week',
      time: '3 hours ago',
      read: true,
      icon: FiUsers,
      color: 'text-secondary-500'
    },
    {
      id: 4,
      type: 'system',
      title: 'System Maintenance',
      message: 'Scheduled maintenance tomorrow at 3 AM UTC',
      time: '1 day ago',
      read: true,
      icon: FiSettings,
      color: 'text-orange-500'
    }
  ]);

  const [hasNewNotifications, setHasNewNotifications] = useState(false);

  useEffect(() => {
    const unreadCount = notifications.filter(n => !n.read).length;
    setHasNewNotifications(unreadCount > 0);
  }, [notifications]);

  const markAsRead = (id) => {
    setNotifications(prev => 
      prev.map(notif => 
        notif.id === id ? { ...notif, read: true } : notif
      )
    );
  };

  const markAllAsRead = () => {
    setNotifications(prev => 
      prev.map(notif => ({ ...notif, read: true }))
    );
  };

  const deleteNotification = (id) => {
    setNotifications(prev => prev.filter(notif => notif.id !== id));
  };

  const unreadCount = notifications.filter(n => !n.read).length;

  const getNotificationIcon = (type) => {
    switch (type) {
      case 'new_tool': return FiStar;
      case 'trending': return FiTrendingUp;
      case 'community': return FiUsers;
      case 'system': return FiSettings;
      default: return FiBell;
    }
  };

  return (
    <div className="relative">
      {/* Notification Bell Button */}
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setIsOpen(!isOpen)}
        className="relative p-2 rounded-xl bg-primary-50 dark:bg-dark-800 text-primary-600 dark:text-primary-400 hover:bg-primary-100 dark:hover:bg-dark-700 transition-all duration-200"
      >
        <motion.div
          animate={hasNewNotifications ? { rotate: [0, -10, 10, -10, 0] } : {}}
          transition={{ duration: 0.5, repeat: hasNewNotifications ? Infinity : 0, repeatDelay: 3 }}
        >
          <FiBell className="w-5 h-5" />
        </motion.div>
        
        {/* Notification Badge */}
        <AnimatePresence>
          {unreadCount > 0 && (
            <motion.div
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0, opacity: 0 }}
              className="absolute -top-1 -right-1 w-5 h-5 bg-red-500 text-white text-xs rounded-full flex items-center justify-center font-bold"
            >
              {unreadCount > 9 ? '9+' : unreadCount}
            </motion.div>
          )}
        </AnimatePresence>

        {/* Pulse Effect for New Notifications */}
        <AnimatePresence>
          {hasNewNotifications && (
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 2, opacity: 0 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ duration: 2, repeat: Infinity }}
              className="absolute inset-0 rounded-xl bg-primary-400 -z-10"
            />
          )}
        </AnimatePresence>
      </motion.button>

      {/* Notification Panel */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 bg-black/20 backdrop-blur-sm z-40 md:hidden"
            />
            
            {/* Notification Tray */}
            <motion.div
              initial={{ opacity: 0, y: -10, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -10, scale: 0.95 }}
              transition={{ duration: 0.2 }}
              className="absolute top-full right-0 mt-2 w-80 max-w-[90vw] bg-white/95 dark:bg-dark-800/95 backdrop-blur-xl rounded-2xl shadow-glass dark:shadow-glass-dark border border-white/20 dark:border-dark-700/50 overflow-hidden z-50"
            >
              {/* Header */}
              <div className="p-4 border-b border-dark-200/50 dark:border-dark-700/50">
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-semibold text-dark-800 dark:text-dark-100">
                    Notifications
                  </h3>
                  <div className="flex items-center space-x-2">
                    {unreadCount > 0 && (
                      <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={markAllAsRead}
                        className="px-3 py-1 text-xs font-medium text-primary-600 dark:text-primary-400 hover:bg-primary-50 dark:hover:bg-primary-900/20 rounded-lg transition-all duration-200"
                      >
                        Mark all read
                      </motion.button>
                    )}
                    <motion.button
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      onClick={() => setIsOpen(false)}
                      className="p-1 rounded-lg text-dark-500 dark:text-dark-400 hover:bg-dark-100 dark:hover:bg-dark-700 transition-all duration-200"
                    >
                      <FiX className="w-4 h-4" />
                    </motion.button>
                  </div>
                </div>
              </div>

              {/* Notifications List */}
              <div className="max-h-96 overflow-y-auto scrollbar-thin scrollbar-thumb-dark-300 dark:scrollbar-thumb-dark-600 scrollbar-track-transparent">
                {notifications.length === 0 ? (
                  <div className="p-8 text-center">
                    <div className="w-16 h-16 mx-auto mb-4 bg-dark-100 dark:bg-dark-700 rounded-2xl flex items-center justify-center">
                      <FiBell className="w-8 h-8 text-dark-400 dark:text-dark-500" />
                    </div>
                    <p className="text-dark-500 dark:text-dark-400 text-sm">
                      No notifications yet
                    </p>
                  </div>
                ) : (
                  <div className="divide-y divide-dark-200/50 dark:divide-dark-700/50">
                    {notifications.map((notification, index) => {
                      const IconComponent = getNotificationIcon(notification.type);
                      return (
                        <motion.div
                          key={notification.id}
                          initial={{ opacity: 0, x: 20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: index * 0.05 }}
                          className={`p-4 hover:bg-dark-50 dark:hover:bg-dark-700/50 transition-all duration-200 ${
                            !notification.read ? 'bg-primary-50/50 dark:bg-primary-900/10' : ''
                          }`}
                        >
                          <div className="flex items-start space-x-3">
                            {/* Icon */}
                            <div className={`p-2 rounded-xl ${notification.color} bg-opacity-10`}>
                              <IconComponent className={`w-4 h-4 ${notification.color}`} />
                            </div>

                            {/* Content */}
                            <div className="flex-1 min-w-0">
                              <div className="flex items-start justify-between">
                                <div className="flex-1">
                                  <h4 className="text-sm font-medium text-dark-800 dark:text-dark-100 truncate">
                                    {notification.title}
                                  </h4>
                                  <p className="text-xs text-dark-600 dark:text-dark-400 mt-1 line-clamp-2">
                                    {notification.message}
                                  </p>
                                  <p className="text-xs text-dark-500 dark:text-dark-500 mt-2">
                                    {notification.time}
                                  </p>
                                </div>

                                {/* Actions */}
                                <div className="flex items-center space-x-1 ml-2">
                                  {!notification.read && (
                                    <motion.button
                                      whileHover={{ scale: 1.1 }}
                                      whileTap={{ scale: 0.9 }}
                                      onClick={() => markAsRead(notification.id)}
                                      className="p-1 rounded-lg text-primary-600 dark:text-primary-400 hover:bg-primary-100 dark:hover:bg-primary-900/20 transition-all duration-200"
                                      title="Mark as read"
                                    >
                                      <FiCheck className="w-3 h-3" />
                                    </motion.button>
                                  )}
                                  <motion.button
                                    whileHover={{ scale: 1.1 }}
                                    whileTap={{ scale: 0.9 }}
                                    onClick={() => deleteNotification(notification.id)}
                                    className="p-1 rounded-lg text-red-500 hover:bg-red-50 dark:hover:bg-red-900/20 transition-all duration-200"
                                    title="Delete"
                                  >
                                    <FiTrash2 className="w-3 h-3" />
                                  </motion.button>
                                </div>
                              </div>
                            </div>
                          </div>

                          {/* Unread Indicator */}
                          {!notification.read && (
                            <div className="absolute left-2 top-4 w-2 h-2 bg-primary-500 rounded-full" />
                          )}
                        </motion.div>
                      );
                    })}
                  </div>
                )}
              </div>

              {/* Footer */}
              {notifications.length > 0 && (
                <div className="p-4 border-t border-dark-200/50 dark:border-dark-700/50 bg-dark-50/50 dark:bg-dark-800/50">
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full py-2 text-sm font-medium text-primary-600 dark:text-primary-400 hover:bg-primary-50 dark:hover:bg-primary-900/20 rounded-lg transition-all duration-200"
                  >
                    View all notifications
                  </motion.button>
                </div>
              )}
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
};

export default NotificationBell;