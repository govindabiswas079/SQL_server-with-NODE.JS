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
    [currentDate] = @currentDate,
    [Device_uuid] = @Device_uuid,
    [browser_version] = @browser_version,
    [IpAddress] = @IpAddress,
    [cardNumber] = @cardNumber
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
    [currentDate],
    [Device_uuid],
    [browser_version],
    [IpAddress],
    [cardNumber]
FROM
    [dbo].[InfoUser]
WHERE
    [Id] = @Id