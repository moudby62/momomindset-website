import { mysqlTable, varchar, text, timestamp, int, boolean, datetime } from 'drizzle-orm/mysql-core'
import { relations } from 'drizzle-orm'

// Users table
export const users = mysqlTable('users', {
  id: int('id').primaryKey().autoincrement(),
  name: varchar('name', { length: 255 }).notNull(),
  email: varchar('email', { length: 255 }).notNull().unique(),
  password: varchar('password', { length: 255 }).notNull(),
  createdAt: timestamp('created_at').defaultNow(),
  updatedAt: timestamp('updated_at').defaultNow().onUpdateNow(),
})

// Newsletter subscriptions
export const newsletterSubscriptions = mysqlTable('newsletter_subscriptions', {
  id: int('id').primaryKey().autoincrement(),
  email: varchar('email', { length: 255 }).notNull().unique(),
  subscribedAt: timestamp('subscribed_at').defaultNow(),
  active: boolean('active').default(true),
})

// Forum discussions
export const discussions = mysqlTable('discussions', {
  id: int('id').primaryKey().autoincrement(),
  userId: int('user_id').notNull(),
  title: varchar('title', { length: 255 }).notNull(),
  content: text('content').notNull(),
  category: varchar('category', { length: 100 }).default('Général'),
  createdAt: timestamp('created_at').defaultNow(),
  updatedAt: timestamp('updated_at').defaultNow().onUpdateNow(),
})

// Forum replies
export const replies = mysqlTable('replies', {
  id: int('id').primaryKey().autoincrement(),
  discussionId: int('discussion_id').notNull(),
  userId: int('user_id').notNull(),
  content: text('content').notNull(),
  createdAt: timestamp('created_at').defaultNow(),
  updatedAt: timestamp('updated_at').defaultNow().onUpdateNow(),
})

// Contact messages
export const contactMessages = mysqlTable('contact_messages', {
  id: int('id').primaryKey().autoincrement(),
  name: varchar('name', { length: 255 }).notNull(),
  email: varchar('email', { length: 255 }).notNull(),
  subject: varchar('subject', { length: 255 }).notNull(),
  message: text('message').notNull(),
  createdAt: timestamp('created_at').defaultNow(),
})

// Relations
export const usersRelations = relations(users, ({ many }) => ({
  discussions: many(discussions),
  replies: many(replies),
}))

export const discussionsRelations = relations(discussions, ({ one, many }) => ({
  author: one(users, {
    fields: [discussions.userId],
    references: [users.id],
  }),
  replies: many(replies),
}))

export const repliesRelations = relations(replies, ({ one }) => ({
  discussion: one(discussions, {
    fields: [replies.discussionId],
    references: [discussions.id],
  }),
  author: one(users, {
    fields: [replies.userId],
    references: [users.id],
  }),
}))
