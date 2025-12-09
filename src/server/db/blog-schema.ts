import { mysqlTable, varchar, text, timestamp, int, boolean } from 'drizzle-orm/mysql-core'
import { relations } from 'drizzle-orm'
import { users } from './schema'

// Blog articles table
export const articles = mysqlTable('articles', {
  id: int('id').primaryKey().autoincrement(),
  title: varchar('title', { length: 255 }).notNull(),
  slug: varchar('slug', { length: 255 }).notNull().unique(),
  excerpt: text('excerpt'),
  content: text('content').notNull(),
  category: varchar('category', { length: 100 }).default('Général'),
  author: varchar('author', { length: 255 }).default('MomoMindset'),
  featured: boolean('featured').default(false),
  published: boolean('published').default(true),
  views: int('views').default(0),
  createdAt: timestamp('created_at').defaultNow(),
  updatedAt: timestamp('updated_at').defaultNow().onUpdateNow(),
})

// Blog comments table
export const comments = mysqlTable('comments', {
  id: int('id').primaryKey().autoincrement(),
  articleId: int('article_id').notNull(),
  userId: int('user_id'),
  name: varchar('name', { length: 255 }).notNull(),
  email: varchar('email', { length: 255 }).notNull(),
  content: text('content').notNull(),
  approved: boolean('approved').default(false),
  createdAt: timestamp('created_at').defaultNow(),
})

// Relations
export const articlesRelations = relations(articles, ({ many }) => ({
  comments: many(comments),
}))

export const commentsRelations = relations(comments, ({ one }) => ({
  article: one(articles, {
    fields: [comments.articleId],
    references: [articles.id],
  }),
}))
