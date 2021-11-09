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