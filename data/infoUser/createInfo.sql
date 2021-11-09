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
        [currentDate],
        [Device_uuid],
        [browser_version],
        [IpAddress],
        [cardNumber]
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
        @currentDate,
        @Device_uuid,
        @browser_version,
        @IpAddress,
        @cardNumber
    )
SELECT
    SCOPE_IDENTITY() AS Id