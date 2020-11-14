import { getUserID } from './authentication'

export const log = async ({
  entityName,
  entityId,
  newValues = {},
  oldValues = {},
  type,
  context,
}) => {
  await context.prisma.log.create({
    data: {
      entityName,
      entityId,
      newValues,
      oldValues,
      type,
      userId: getUserID(context),
    },
  })
}
