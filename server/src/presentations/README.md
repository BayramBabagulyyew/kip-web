# Presentations Module

Manages presentation files (e.g. brochures / slide decks) that can be uploaded by
authenticated admins and fetched publicly by the client.

## Data Model

`presentations` (Prisma model — see `prisma/schema.prisma`):

| Field            | Type       | Notes                                  |
| ---------------- | ---------- | -------------------------------------- |
| `presentationId` | `String`   | Primary key, unique, `cuid()` default  |
| `file`           | `String`   | File URL / path                        |
| `language`       | `String`   | Language code of the presentation      |
| `createdAt`      | `DateTime` | Defaults to `now()`                    |
| `updatedAt`      | `DateTime` | Auto-updated on change                 |

## DTO

`CreatePresentationDto` (used for both create and update):

| Field      | Type     | Validation  |
| ---------- | -------- | ----------- |
| `file`     | `string` | `@IsString` |
| `language` | `string` | `@IsString` |

## Endpoints

Base path: `/presentation`

| Method   | Path                | Auth        | Description                                  |
| -------- | ------------------- | ----------- | -------------------------------------------- |
| `GET`    | `/presentation/latest` | Public   | Returns the most recently created presentation (optional `?language=` filter, case-insensitive) |
| `POST`   | `/presentation`     | `AuthGuard` | Create a presentation                        |
| `GET`    | `/presentation`     | `AuthGuard` | Paginated list of presentations              |
| `GET`    | `/presentation/:id` | `AuthGuard` | Get one presentation by `presentationId`     |
| `PATCH`  | `/presentation/:id` | `AuthGuard` | Update a presentation                        |
| `DELETE` | `/presentation/:id` | `AuthGuard` | Delete a presentation                        |

### Notes

- All responses are wrapped by `responseInterceptor`.
- `GET /presentation/latest` is the only **public** endpoint; the client uses it to
  fetch the current presentation. It accepts an optional `language` query param
  (case-insensitive) so the client can request the latest presentation for the active
  locale — `Intro.vue` maps `$i18n.locale` (`en`/`ru`/`tm`) to the stored
  `language` value (`En`/`Ru`/`Tm`). All other routes require a valid auth token via
  `AuthGuard`.
- The list endpoint (`GET /presentation`) uses `@PaginationParams()` and returns
  `{ count, pageCount, rows }`. Supported query params: `limit`, `skip`,
  `order_by`, `order_direction`.
- `findOne`, `update`, and `remove` throw `404 Presentation not found` when the
  `presentationId` does not exist.

## Wiring

`PresentationsModule` registers `PresentationsController` and `PresentationsService`
(which it also exports) and is imported in `app.module.ts`.
