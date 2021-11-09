UPDATE
    [dbo].[InfoUser]
SET
    [Title] = @Title,
    [FirstName] = @FirstName,
    [LastName] = @LastName,
    [Mobile] = @Mobile,
    [Dob] = @Dob,
    [Email] = @Email,
    [Password] = @Password,
    [ConfirmPassword] = @ConfirmPassword,
    [currentDate] = @currentDate
WHERE
    [Id] = @Id
SELECT
    [Id],
    [Title],
    [FirstName],
    [LastName],
    [Mobile],
    [Dob],
    [Email],
    [Password],
    [ConfirmPassword],
    [currentDate]
FROM
    [dbo].[InfoUser]
WHERE
    [Id] = @Id