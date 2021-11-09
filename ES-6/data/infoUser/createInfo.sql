INSERT INTO
    [dbo].[InfoUser] (
        [Title],
        [FirstName],
        [LastName],
        [Mobile],
        [Dob],
        [Email],
        [Password],
        [ConfirmPassword],
        [currentDate]
    )
VALUES
    (
        @Title,
        @FirstName,
        @LastName,
        @Mobile,
        @Dob,
        @Email,
        @Password,
        @ConfirmPassword,
        @currentDate
    )
SELECT
    SCOPE_IDENTITY() AS Id