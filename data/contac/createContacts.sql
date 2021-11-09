INSERT INTO
    [dbo].[contact] (
        [Name],
        [Email],
        [Subject],
        [Message]
    )
VALUES
    (
        @Name,
        @Email,
        @Subject,
        @Message
    )
SELECT
    SCOPE_IDENTITY() AS Id