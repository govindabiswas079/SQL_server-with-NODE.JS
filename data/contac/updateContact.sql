UPDATE
    [dbo].[contact]
SET
    [Name] = @Name,
    [Email] = @Email,
    [Subject] = @Subject,
    [Message] = @Message
WHERE
    [Id] = @Id
SELECT
    [Id],
    [Name],
    [Email],
    [Subject],
    [Message]
FROM
    [dbo].[contact]
WHERE
    [Id] = @Id