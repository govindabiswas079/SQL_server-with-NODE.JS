INSERT INTO
    [dbo].[employee] (
        [name],
        [email],
        [designation],
        [phoneNumber]
    )
VALUES
    (
        @name,
        @email,
        @designation,
        @phoneNumber
    )
SELECT
    SCOPE_IDENTITY() AS Id